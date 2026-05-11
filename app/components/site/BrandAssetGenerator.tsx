"use client";

import { useEffect, useState } from "react";
import { Copy, Loader2, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

type GeneratedAsset = {
  colorPalette: Array<{
    name: string;
    hex: string;
    usage: string;
  }>;
  fonts: Array<{
    category: string;
    recommendation: string;
    reasoning: string;
  }>;
  logoPrompt: string;
  brandDescription: string;
  sheetSaved?: boolean;
  sheetMessage?: string;
};

type SheetStatus = {
  saved: boolean;
  message: string;
};

export function BrandAssetGenerator() {
  const [formData, setFormData] = useState({
    brandName: "",
    brandUrl: "",
    contact: "",
    email: "",
    businessDescription: "",
  });
  const [loading, setLoading] = useState(false);
  const [generatedAssets, setGeneratedAssets] = useState<GeneratedAsset | null>(null);
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedFullPrompt, setCopiedFullPrompt] = useState(false);
  const [error, setError] = useState("");
  const [sheetStatus, setSheetStatus] = useState<SheetStatus | null>(null);

  useEffect(() => {
    if (!showPromptModal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showPromptModal]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setGeneratedAssets(null);
    setSheetStatus(null);
    setShowPromptModal(false);

    try {
      const response = await fetch("/api/generate-brand-assets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorBody = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(errorBody?.error || "Failed to generate brand assets");
      }

      const data = await response.json();
      setGeneratedAssets(data);
      setShowPromptModal(true);
      if (typeof data.sheetSaved === "boolean") {
        setSheetStatus({
          saved: data.sheetSaved,
          message:
            data.sheetMessage ||
            (data.sheetSaved
              ? "Form details saved to Google Sheets."
              : "Form generated but not saved to Google Sheets."),
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, isFull = false) => {
    navigator.clipboard.writeText(text);
    if (isFull) {
      setCopiedFullPrompt(true);
      setTimeout(() => setCopiedFullPrompt(false), 2000);
    } else {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    }
  };

  const fullPromptTemplate = `You are a world-class brand identity designer. I need you to create a complete brand identity system for my brand.

Brand name: ${formData.brandName}
Brand URL: ${formData.brandUrl}
Owner: ${formData.contact}
The business is: ${formData.businessDescription}.

Please generate the following in full detail:

---

1. COLOR PALETTE
   - Primary color (with HEX code)
   - Secondary color (with HEX code)
   - Accent color (with HEX code)
   - Background color (with HEX code)
   - Text color (with HEX code)
   - Explain why each color suits this brand's personality

2. TYPOGRAPHY
   - Heading font (name + Google Fonts link)
   - Body font (name + Google Fonts link)
   - Explain the pairing and tone it creates

3. LOGO CONCEPT
   - Describe 3 logo concepts in detail (symbol, wordmark, or combination)
   - For each: shape, icon idea, style, and what it communicates
   - Recommend which one to go with and why

4. BRAND PERSONALITY
   - 5 brand personality keywords
   - Brand voice description (how the brand should sound in copy)
   - Target audience description

5. VISUAL STYLE GUIDE
   - Recommended design style (minimal, bold, playful, corporate, etc.)
   - Imagery style (photography tone, illustration style if any)
   - Button shape, spacing, and layout recommendations

6. MIDJOURNEY / DALL-E PROMPT
   - Write a ready-to-use image generation prompt to visualise the brand logo concept

Format your response with clear headings for each section. Be specific with HEX codes, font names, and visual descriptions so a designer can implement this directly.`;

  return (
    <div className="space-y-8">
      {/* Prompt Modal Overlay */}
      {showPromptModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setShowPromptModal(false)}
          />
          <section className="relative w-full max-w-2xl rounded-2xl border border-border bg-card p-5 shadow-2xl md:p-8 animate-in zoom-in-95 duration-300 flex flex-col max-h-[85vh] overflow-hidden z-50">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display text-xl font-bold md:text-2xl text-ink">
                  Brand Identity Master Prompt
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Copy this prompt and use it with your favorite AI designer.
                </p>
              </div>
              <button
                onClick={() => setShowPromptModal(false)}
                className="rounded-full p-2 text-muted-foreground hover:bg-surface hover:text-ink transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div
              className="relative flex flex-col flex-1 min-h-0 rounded-xl border border-border bg-background overflow-hidden"
              style={{ maxHeight: "40vh" }}
            >
              <div className="absolute top-3 right-3 z-10">
                <button
                  onClick={() => copyToClipboard(fullPromptTemplate, true)}
                  className="inline-flex items-center gap-2 rounded-lg bg-lime px-4 py-2 text-sm font-semibold text-lime-foreground shadow-lg hover:shadow-[0_0_15px_var(--lime)] transition-all"
                >
                  <Copy className="h-4 w-4" />
                  {copiedFullPrompt ? "Copied!" : "Copy Full Prompt"}
                </button>
              </div>
              <div className="flex-1 min-h-0 overflow-y-scroll pr-2">
                <pre className="p-6 pt-14 pr-2 pb-20 text-sm text-muted-foreground font-mono whitespace-pre-wrap wrap-break-word leading-relaxed">
                  {fullPromptTemplate}
                </pre>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowPromptModal(false)}
                className="px-6 py-2 rounded-lg bg-surface text-ink font-medium hover:bg-border transition-colors"
              >
                Done
              </button>
            </div>
          </section>
        </div>
      )}

      {/* URL Input & Form Section */}
      <section className="rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
        <h2 className="font-display text-xl font-semibold md:text-2xl">
          Generate Your Brand Assets with AI
        </h2>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Enter your brand information and we&apos;ll generate a complete brand identity including
          color palettes, font recommendations, and logo concepts.
        </p>

        <form onSubmit={handleGenerate} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-ink mb-2">Brand URL</label>
            <input
              type="url"
              name="brandUrl"
              placeholder="https://your-brand.com"
              value={formData.brandUrl}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-ink placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-ink mb-2">Brand Name</label>
              <input
                type="text"
                name="brandName"
                placeholder="Your Brand Name"
                value={formData.brandName}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-ink placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">Contact Person</label>
              <input
                type="text"
                name="contact"
                placeholder="Your Name"
                value={formData.contact}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-ink placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-ink placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-2">Business Description</label>
            <textarea
              name="businessDescription"
              placeholder="Describe your business, products, and target audience..."
              value={formData.businessDescription}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-ink placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime"
            />
          </div>

          {error && (
            <div className="rounded-lg border border-destructive bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-lime px-4 py-2 font-medium text-lime-foreground transition-all duration-300 hover:shadow-[0_0_18px_var(--lime)] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Assets"
            )}
          </button>
        </form>
      </section>

      {/* Generated Assets Display - Commented out mock data as requested */}
      {/* 
      {generatedAssets && (
        <section className="space-y-6">
          {sheetStatus && !sheetStatus.saved && (
            <div
              className="rounded-lg border border-destructive bg-destructive/10 p-3 text-sm text-destructive"
            >
              {sheetStatus.message}
            </div>
          )}

          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
            <h3 className="font-display text-lg font-semibold md:text-xl">Color Palette</h3>
            <p className="mt-2 text-sm text-muted-foreground">{generatedAssets.brandDescription}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {generatedAssets.colorPalette.map((color, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg border border-border bg-surface"
                >
                  <div className="h-24 w-full" style={{ backgroundColor: color.hex }} />
                  <div className="p-3 space-y-1">
                    <p className="font-display text-sm font-semibold">{color.name}</p>
                    <p className="font-mono text-xs text-muted-foreground">{color.hex}</p>
                    <p className="text-xs text-muted-foreground">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
            <h3 className="font-display text-lg font-semibold md:text-xl">Font Recommendations</h3>
            <div className="mt-4 space-y-3">
              {generatedAssets.fonts.map((font, index) => (
                <div key={index} className="rounded-lg border border-border bg-surface p-4">
                  <p className="font-display font-semibold text-ink">{font.category}</p>
                  <p className="mt-1 text-sm font-medium text-[color:var(--lime)]">
                    {font.recommendation}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">{font.reasoning}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
            <h3 className="font-display text-lg font-semibold md:text-xl">
              AI Logo Generation Prompt
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Use this prompt with an AI image generator (Midjourney, DALL-E, etc.) to create logo
              concepts:
            </p>
            <div className="mt-4 rounded-lg border border-border bg-background p-4">
              <p className="text-xs text-muted-foreground font-mono whitespace-pre-wrap break-words">
                {generatedAssets.logoPrompt}
              </p>
              <button
                onClick={() => copyToClipboard(generatedAssets.logoPrompt)}
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-ink hover:bg-[color:var(--lime)]/10 transition-colors"
              >
                <Copy className="h-3 w-3" />
                {copiedPrompt ? "Copied!" : "Copy Prompt"}
              </button>
            </div>
          </div>
        </section>
      )}
      */}
    </div>
  );
}
