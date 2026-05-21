import type { ReactNode } from "react";

type Props = {
  as?: "h1" | "h2";
  lead: ReactNode;
  accent: ReactNode;
  className?: string;
};

/**
 * Two-line marketing headline: terracotta gradient lead + italic gradient accent.
 * Keep `className` aligned across all six landing sections (scale + max-width + tracking).
 */
function hasAccentContent(accent: ReactNode) {
  if (accent == null || accent === false) return false;
  if (typeof accent === "string") return accent.trim().length > 0;
  return true;
}

export default function SplitSectionHeadline({ as = "h2", lead, accent, className = "" }: Props) {
  const Tag = as;
  return (
    <Tag className={className}>
      <span className="section-headline__lead block">{lead}</span>
      {hasAccentContent(accent) ? (
        <span className="section-headline__accent font-fraunces grad-text block">{accent}</span>
      ) : null}
    </Tag>
  );
}

/** For `motion.h2` wrappers — same inner markup as `SplitSectionHeadline`. */
export function SplitSectionHeadlineLines({
  lead,
  accent,
}: {
  lead: ReactNode;
  accent: ReactNode;
}) {
  return (
    <>
      <span className="section-headline__lead block">{lead}</span>
      {hasAccentContent(accent) ? (
        <span className="section-headline__accent font-fraunces grad-text block italic">
          {accent}
        </span>
      ) : null}
    </>
  );
}
