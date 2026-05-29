import Image from "next/image";

const SHOPIFY_ICON = "/images/shopifyIcon.png";

type ShopifyMarkProps = {
  size?: number;
  className?: string;
};

/** Official Shopify bag icon */
export function ShopifyMark({ size = 22, className }: ShopifyMarkProps) {
  return (
    <Image
      src={SHOPIFY_ICON}
      alt=""
      width={size}
      height={Math.round(size * 1.12)}
      className={className}
      aria-hidden
    />
  );
}
