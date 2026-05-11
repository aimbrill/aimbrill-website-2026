import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

type BrandInfo = {
  brandName: string;
  brandUrl: string;
  contact: string;
  email: string;
  businessDescription: string;
};

type SheetSaveResult = {
  saved: boolean;
  message: string;
};

type SheetApiError = {
  message?: string;
  code?: number;
};

// Mock data for testing without API key
function getMockBrandAssets(brandInfo: BrandInfo) {
  return {
    colorPalette: [
      {
        name: "Primary",
        hex: "#2563eb",
        usage: "Main brand color for headlines and CTAs",
      },
      {
        name: "Secondary",
        hex: "#7c3aed",
        usage: "Supporting color for accents and highlights",
      },
      {
        name: "Neutral",
        hex: "#f5f5f5",
        usage: "Light background color for surfaces",
      },
      {
        name: "Accent",
        hex: "#84cc16",
        usage: "Highlight and interactive elements",
      },
    ],
    fonts: [
      {
        category: "Headings",
        recommendation: "Inter Bold (700)",
        reasoning:
          "Modern and professional, perfect for brand headlines and strong calls-to-action",
      },
      {
        category: "Body Text",
        recommendation: "Inter Regular (400)",
        reasoning: "Highly readable for body content and long-form text",
      },
      {
        category: "Accents/Labels",
        recommendation: "Inter Medium (600)",
        reasoning: "Distinctive for UI elements, buttons, and labels",
      },
    ],
    logoPrompt: `Create a modern logo for "${brandInfo.brandName}". The brand focuses on ${brandInfo.businessDescription}. Use colors: blue (#2563eb) and purple (#7c3aed). Style: minimalist, tech-forward, professional. Include subtle design elements that represent innovation and growth. The logo should work well at small sizes and on both light and dark backgrounds. Format: vector, clean lines, no overly complex details.`,
    brandDescription: `A modern identity for ${brandInfo.brandName}, reflecting its focus on ${brandInfo.businessDescription}.`,
  };
}

async function generateBrandAssets(brandInfo: BrandInfo) {
  const apiKey = process.env.AI_API_KEY;
  const useDemo = !apiKey || apiKey.includes("your-api-key");

  if (useDemo) {
    console.log("[DEMO MODE] AI key not configured. Returning mock brand assets.");
    return getMockBrandAssets(brandInfo);
  }

  // Create a detailed prompt for the AI
  const prompt = `You are a brand identity expert. Based on the following brand information, generate a complete brand identity system.

Brand Name: ${brandInfo.brandName}
Brand URL: ${brandInfo.brandUrl}
Contact: ${brandInfo.contact}
Email: ${brandInfo.email}
Business Focus: ${brandInfo.businessDescription}

Please provide the response in the following JSON format (no markdown, pure JSON):
{
  "colorPalette": [
    {
      "name": "Primary Color",
      "hex": "#RRGGBB",
      "usage": "Main brand color for headlines and CTAs"
    },
    {
      "name": "Secondary Color",
      "hex": "#RRGGBB",
      "usage": "Supporting color for accents"
    },
    {
      "name": "Neutral Background",
      "hex": "#RRGGBB",
      "usage": "Light background color"
    },
    {
      "name": "Accent Color",
      "hex": "#RRGGBB",
      "usage": "Highlight and interactive elements"
    }
  ],
  "fonts": [
    {
      "category": "Headings",
      "recommendation": "Font Name (Weight: Bold, 700)",
      "reasoning": "Modern and professional, fits brand personality"
    },
    {
      "category": "Body Text",
      "recommendation": "Font Name (Weight: Regular, 400)",
      "reasoning": "Highly readable for body content"
    },
    {
      "category": "Accents/Labels",
      "recommendation": "Font Name (Weight: Medium, 600)",
      "reasoning": "Distinctive for UI elements"
    }
  ],
  "logoPrompt": "A detailed prompt for generating a logo using AI image generators. Include specific style, colors, and elements.",
  "brandDescription": "A 2-3 sentence brand identity description summarizing the color strategy and brand personality"
}

Generate cohesive, professional brand assets that work well together. Ensure colors have good contrast and are web-accessible.`;

  // Call OpenAI API (you can replace with Claude or another service)
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.8,
      max_tokens: 2000,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate assets from AI service");
  }

  const data = await response.json();
  const content = data.choices[0].message.content;

  // Parse the JSON response
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Invalid response format from AI");
  }

  const generatedAssets = JSON.parse(jsonMatch[0]);
  return generatedAssets;
}

// Save to Google Sheets
function getSheetsCredentials() {
  let serviceAccountRaw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const serviceAccountPrivateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  if (serviceAccountRaw) {
    try {
      // Remove leading/trailing single quotes if they were included in .env.local
      serviceAccountRaw = serviceAccountRaw.trim();
      if (serviceAccountRaw.startsWith("'") && serviceAccountRaw.endsWith("'")) {
        serviceAccountRaw = serviceAccountRaw.substring(1, serviceAccountRaw.length - 1);
      }

      const serviceAccount = JSON.parse(serviceAccountRaw) as {
        client_email: string;
        private_key: string;
      };
      return {
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
      };
    } catch (e) {
      console.error("Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON:", e);
    }
  }

  if (serviceAccountEmail && serviceAccountPrivateKey) {
    // Clean up private key: handle surrounding quotes and escaped newlines
    let privateKey = serviceAccountPrivateKey.trim();
    if (privateKey.startsWith('"') && privateKey.endsWith('"')) {
      privateKey = privateKey.substring(1, privateKey.length - 1);
    }

    return {
      clientEmail: serviceAccountEmail.trim(),
      privateKey: privateKey.replace(/\\n/g, "\n"),
    };
  }

  return null;
}

async function saveToGoogleSheets(brandInfo: BrandInfo): Promise<SheetSaveResult> {
  const sheetId = process.env.GOOGLE_SHEETS_ID;
  let sheetTabName = process.env.GOOGLE_SHEETS_TAB_NAME || "Form Responses";
  sheetTabName = sheetTabName.replace(/['"]/g, "").trim();
  const credentials = getSheetsCredentials();

  if (!sheetId) {
    const message = "GOOGLE_SHEETS_ID is missing in .env.local";
    console.warn("[GOOGLE SHEETS ERROR]", message);
    return { saved: false, message };
  }

  if (!credentials) {
    const message =
      "Google service account credentials (JSON or Email/Key) are missing in .env.local.";
    console.warn("[GOOGLE SHEETS ERROR]", message);
    return {
      saved: false,
      message,
    };
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: credentials.clientEmail,
        private_key: credentials.privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const timestamp = new Date().toLocaleString();
    const values = [
      [
        timestamp,
        brandInfo.brandName,
        brandInfo.brandUrl,
        brandInfo.contact,
        brandInfo.email,
        brandInfo.businessDescription,
      ],
    ];

    // Important: Range name should be quoted if it contains spaces
    const range = `'${sheetTabName}'!A:F`;

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: range,
        valueInputOption: "USER_ENTERED",
        requestBody: { values },
      });
    } catch (appendError: unknown) {
      const appendErrorDetails = appendError as SheetApiError;

      // If range fails, let's list available sheets to help the user
      if (appendErrorDetails.message?.includes("range") || appendErrorDetails.code === 400) {
        const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
        const sheetNames = spreadsheet.data.sheets
          ?.map((sheet) => sheet.properties?.title)
          .join(", ");
        console.error(
          `[CONFIG ERROR] Tab "${sheetTabName}" not found. Available tabs in this sheet are: [${sheetNames}]`,
        );
        return {
          saved: false,
          message: `Sheet tab "${sheetTabName}" not found. Try one of these: ${sheetNames}`,
        };
      }
      throw appendError;
    }

    console.log("[OK] Data saved to Google Sheets successfully.");
    return { saved: true, message: "Form details saved to Google Sheets." };
  } catch (error: unknown) {
    console.error("Error saving to Google Sheets:", error);

    let errorMessage = "Could not save to Google Sheets.";
    const errorDetails = error as SheetApiError;

    if (errorDetails.code === 403) {
      errorMessage =
        "Access denied. Make sure the service account email is shared with the spreadsheet.";
    } else if (errorDetails.code === 404) {
      errorMessage = "Spreadsheet not found. Verify GOOGLE_SHEETS_ID.";
    }

    return {
      saved: false,
      message: errorDetails.message || errorMessage,
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const { brandName, brandUrl, contact, email, businessDescription } = body;
    if (!brandName || !brandUrl || !contact || !email || !businessDescription) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Generate brand assets using AI
    const generatedAssets = await generateBrandAssets({
      brandName,
      brandUrl,
      contact,
      email,
      businessDescription,
    });

    // Save to Google Sheets
    const sheetSave = await saveToGoogleSheets({
      brandName,
      brandUrl,
      contact,
      email,
      businessDescription,
    });

    return NextResponse.json({
      ...generatedAssets,
      sheetSaved: sheetSave.saved,
      sheetMessage: sheetSave.message,
    });
  } catch (error) {
    console.error("Error generating brand assets:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 },
    );
  }
}
