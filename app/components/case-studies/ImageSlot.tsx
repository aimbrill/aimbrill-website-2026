type ImageSlotProps = {
  label: string;
  hint?: string;
  /** Visual height of the empty slot. Default is a wide article screenshot. */
  size?: "hero" | "step" | "wide";
};

const sizeClass = {
  hero: "min-h-[280px] md:min-h-[340px]",
  wide: "min-h-[220px] md:min-h-[260px]",
  step: "min-h-[180px] md:min-h-[210px]",
};

export function ImageSlot({ label, hint, size = "step" }: ImageSlotProps) {
  return (
    <figure className="not-prose my-5">
      <div
        className={`flex w-full items-center justify-center rounded-2xl border-2 border-dashed border-border bg-surface px-6 py-10 text-center ${sizeClass[size]}`}
      >
        <div className="max-w-sm">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Image space
          </p>
          <p className="mt-2 font-display text-sm font-semibold text-ink">{label}</p>
          {hint ? (
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{hint}</p>
          ) : (
            <p className="mt-1 text-xs text-muted-foreground">Add your screenshot here later.</p>
          )}
        </div>
      </div>
    </figure>
  );
}
