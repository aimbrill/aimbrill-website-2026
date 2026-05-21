import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { mealFlowLinks } from "../lib/links";

const intro = `The App (referred to as "the App", "we", "us", or "our") provides merchants with tools to create and sell customizable product bundles, enable location-based availability (such as pincode validation), allow delivery scheduling (including date selection), and offer subscription-based purchasing experiences (collectively, the "Service") to merchants who use Shopify to power their stores.`;

export default function PrivacyPage() {
  return (
    <main className="page-theme bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--violet)] selection:text-white min-h-screen flex flex-col">
      <Header />

      <section className="section section--lg flex-1 pb-20 pt-28 sm:pt-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-[32px] md:text-[40px] font-black mb-6">Privacy Policy</h1>

          <div className="prose max-w-none text-[16px] text-[var(--muted)] space-y-6">
            <p>{intro}</p>

            <p>
              This Privacy Policy describes how we collect, use, and share personal information when
              you install or use the App in connection with your Shopify-supported store.
            </p>

            <div className="my-8" />

            <h2>1. Information We Collect</h2>

            <h3>a) Information from Shopify</h3>
            <ul>
              <li>Store name, store URL, and contact email</li>
              <li>Shopify plan, currency, and billing details</li>
              <li>
                Access to products, collections, and themes (as required for app functionality)
              </li>
            </ul>

            <h3>b) Product &amp; Service Data</h3>
            <ul>
              <li>Bundle configurations and selections</li>
              <li>Subscription plan settings</li>
              <li>Delivery configuration (including pincode availability and delivery dates)</li>
              <li>Product details (titles, variants, pricing, images)</li>
            </ul>

            <h3>c) Order &amp; Customer Data</h3>
            <p>When customers interact with your store through the App:</p>
            <ul>
              <li>Name, email address, phone number</li>
              <li>Shipping address and pincode</li>
              <li>Selected bundles and customization preferences</li>
              <li>Chosen delivery dates and time preferences</li>
              <li>Subscription selections and order history</li>
            </ul>

            <h3>d) Usage &amp; Device Information</h3>
            <ul>
              <li>IP address, browser type, device information</li>
              <li>Cookies, log files, and session data</li>
              <li>Interaction with bundle builder, delivery selection, and checkout</li>
            </ul>

            <div className="my-8" />

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide and operate the App’s features</li>
              <li>
                Enable <strong>bundle creation and customization</strong>
              </li>
              <li>
                Validate <strong>delivery availability based on location (pincode)</strong>
              </li>
              <li>
                Allow <strong>delivery date selection and scheduling</strong>
              </li>
              <li>
                Manage <strong>subscriptions and recurring billing logic</strong>
              </li>
              <li>
                Generate and display <strong>checkout summaries</strong>
              </li>
              <li>Process and support orders</li>
              <li>Communicate with merchants</li>
              <li>Provide customer support</li>
              <li>Improve app performance and user experience</li>
            </ul>

            <p>We do not use personal data for unrelated purposes.</p>

            <div className="my-8" />

            <h2>3. Sharing of Information</h2>
            <p>
              We do <strong>not sell, rent, or share personal information</strong>. All information
              is accessed with permission and used only to provide and improve app functionality and
              features.
            </p>

            <div className="my-8" />

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Maintain user sessions</li>
              <li>Improve functionality and performance</li>
              <li>Analyze usage patterns</li>
            </ul>
            <p>You can manage cookies through your browser settings.</p>

            <div className="my-8" />

            <h2>5. Data Retention</h2>
            <p>We retain personal information only as long as necessary to:</p>
            <ul>
              <li>Provide the Service</li>
              <li>Fulfill orders and subscriptions</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>Merchants may request deletion of their data at any time.</p>

            <div className="my-8" />

            <h2>6. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect
              personal information. However, no method of transmission over the Internet is 100%
              secure.
            </p>

            <div className="my-8" />

            <h2>7. Merchant Responsibilities</h2>
            <p>Merchants using the App are responsible for:</p>
            <ul>
              <li>Ensuring compliance with applicable privacy laws</li>
              <li>Providing accurate disclosures to their customers</li>
              <li>Managing customer data collected through their store</li>
            </ul>

            <div className="my-8" />

            <h2>8. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access personal data</li>
              <li>Request correction or deletion</li>
              <li>Restrict or object to processing</li>
            </ul>
            <p>To exercise these rights, please contact us.</p>

            <div className="my-8" />

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect operational, legal, or
              regulatory changes. Updates will be posted with a revised effective date.
            </p>

            <div className="my-8" />

            <h2>10. Contact Information</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:admin@aimbrill.com" className="text-[var(--violet)]">
                admin@aimbrill.com
              </a>
            </p>
            <p>
              <strong>Company:</strong> MealFlow Box
              <br />
              <strong>Address:</strong> 438, Maruti Plaza complex, Krishnanagar, Ahmedabad
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
