const STEPS = [
  {
    num: "01",
    title: "AI Creates Your Quiz",
    text: "AI automatically generates smart quiz questions tailored to your product catalog and customer journey.",
    icon: "🤖",
  },
  {
    num: "02",
    title: "Customers Answer Questions",
    text: "Guide shoppers through a personalized quiz experience that feels natural and engaging.",
    icon: "💬",
  },
  {
    num: "03",
    title: "AI Recommends Products",
    text: "Deliver highly relevant product recommendations based on customer responses and shopping intent.",
    icon: "✨",
  },
  {
    num: "04",
    title: "Increase Conversions",
    text: "Boost sales, improve customer experience, and increase average order value with personalization.",
    icon: "📈",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="aq-section aq-how" id="how-it-works">
      <div className="aq-wrap">
        <div className="aq-section-intro">
          <h2>
            Turn Product Discovery Into{" "}
            <span className="aq-section-accent">Personalized Shopping</span>
          </h2>
        </div>

        <ol className="aq-how-steps">
          {STEPS.map((step, index) => (
            <li key={step.num} className="aq-how-step">
              {index < STEPS.length - 1 && <span className="aq-how-step__connector" aria-hidden />}
              <div className="aq-how-step__card">
                <div className="aq-how-step__top">
                  <span className="aq-how-step__num">Step {step.num}</span>
                  {/* icon removed */}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
