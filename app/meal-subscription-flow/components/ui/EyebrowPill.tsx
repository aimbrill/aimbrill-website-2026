export default function EyebrowPill({ label }: { label: string }) {
  return (
    <div className="eyebrow-pill mx-auto inline-flex w-fit max-w-[620px]">
      <span className="eyebrow-pill-dot" />
      <span className="grad-text">{label}</span>
    </div>
  );
}
