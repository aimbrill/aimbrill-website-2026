import React from "react";

type IconProps = {
  size?: number;
  className?: string;
};

export function InstagramIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="11.8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ size = 16, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 10.5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.5 9.2a1 1 0 110-2 1 1 0 010 2z" fill="currentColor" />
      <path
        d="M12.2 15.5v-3.2c0-.9.7-1.2 1.4-1.2 0.8 0 1.4.4 1.4 1.2v3.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="13.6" y="9.2" width="1.8" height="1.8" rx="0.4" fill="currentColor" />
    </svg>
  );
}
