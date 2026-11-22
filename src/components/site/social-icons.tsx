import type { ReactNode } from "react";
import type { SocialPlatform } from "@/lib/site";

/**
 * Footer icon set.
 *
 * Drawn as inline SVG rather than pulled from an icon package: the footer needs
 * seven brand marks and five utility glyphs, and a dependency for that is a
 * worse trade than a hundred lines of geometry. Everything inherits
 * `currentColor`, so the footer controls the colour from one place.
 *
 * Server-safe — no "use client", no hooks.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const BRAND_ICONS: Record<SocialPlatform, ReactNode> = {
  facebook: (
    <Svg>
      <path
        {...stroke}
        d="M14.5 8.5h2.2V5.4h-2.4c-2.3 0-3.6 1.4-3.6 3.7v1.5H8.4v3.1h2.3V21h3.2v-7.3h2.3l.4-3.1h-2.7V9.4c0-.6.2-.9.6-.9z"
      />
    </Svg>
  ),
  instagram: (
    <Svg>
      <rect {...stroke} x="3.6" y="3.6" width="16.8" height="16.8" rx="5" />
      <circle {...stroke} cx="12" cy="12" r="4.1" />
      <circle cx="17.1" cy="6.9" r="1.15" fill="currentColor" />
    </Svg>
  ),
  linkedin: (
    <Svg>
      <rect {...stroke} x="3.6" y="3.6" width="16.8" height="16.8" rx="4" />
      <path {...stroke} d="M7.6 10.6V17" />
      <circle cx="7.6" cy="7.6" r="1.15" fill="currentColor" />
      <path
        {...stroke}
        d="M11.4 17v-6.4M11.4 13.4c0-1.7 1-2.9 2.6-2.9s2.4 1.1 2.4 2.9V17"
      />
    </Svg>
  ),
  x: (
    <Svg>
      <path {...stroke} d="M4.5 4.5l15 15M19.5 4.5l-15 15" />
    </Svg>
  ),
  youtube: (
    <Svg>
      <rect {...stroke} x="2.8" y="5.6" width="18.4" height="12.8" rx="4" />
      <path {...stroke} d="M10.4 9.4l4.6 2.6-4.6 2.6z" />
    </Svg>
  ),
  tiktok: (
    <Svg>
      <path {...stroke} d="M13.6 3.8v10.6a3.4 3.4 0 1 1-3.4-3.4" />
      <path {...stroke} d="M13.6 5.6c.5 2 2 3.4 4.1 3.6" />
    </Svg>
  ),
  github: (
    <Svg>
      <path
        {...stroke}
        d="M9 20.4c-3.6 1-3.6-1.9-5-2.3m10 4.2v-3.3c0-.9.1-1.3-.4-1.8 2.2-.2 4.5-1.1 4.5-4.9a3.8 3.8 0 0 0-1-2.7 3.5 3.5 0 0 0-.1-2.6s-.8-.3-2.7 1a9.4 9.4 0 0 0-4.9 0c-1.9-1.3-2.7-1-2.7-1a3.5 3.5 0 0 0-.1 2.6 3.8 3.8 0 0 0-1 2.7c0 3.8 2.3 4.7 4.5 4.9-.5.5-.5 1-.4 1.8v3.3"
      />
    </Svg>
  ),
};

export function SocialIcon({ platform }: { platform: SocialPlatform }) {
  return <>{BRAND_ICONS[platform]}</>;
}

/* Utility glyphs used in the "Get in touch" column. */

export function MailIcon() {
  return (
    <Svg>
      <rect {...stroke} x="3" y="5.4" width="18" height="13.2" rx="2.6" />
      <path {...stroke} d="m3.8 7 8.2 6 8.2-6" />
    </Svg>
  );
}

export function ChatIcon() {
  return (
    <Svg>
      <path
        {...stroke}
        d="M20.4 11.6a8.4 8.4 0 0 1-12.3 7.5L3.6 20.4l1.3-4.5A8.4 8.4 0 1 1 20.4 11.6z"
      />
    </Svg>
  );
}

export function StarIcon() {
  return (
    <Svg>
      <path
        {...stroke}
        d="m12 3.8 2.5 5.1 5.6.8-4 4 .9 5.6-5-2.7-5 2.7.9-5.6-4-4 5.6-.8z"
      />
    </Svg>
  );
}

export function PinIcon() {
  return (
    <Svg>
      <path
        {...stroke}
        d="M12 21s6.5-5.6 6.5-10.4a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21z"
      />
      <circle {...stroke} cx="12" cy="10.4" r="2.4" />
    </Svg>
  );
}

export function CallIcon() {
  return (
    <Svg>
      <path
        {...stroke}
        d="M20 16.2v2.6a1.7 1.7 0 0 1-1.9 1.7 17 17 0 0 1-7.4-2.6 16.7 16.7 0 0 1-5.1-5.1A17 17 0 0 1 3 5.3 1.7 1.7 0 0 1 4.7 3.4h2.6a1.7 1.7 0 0 1 1.7 1.5c.1.8.3 1.6.6 2.4a1.7 1.7 0 0 1-.4 1.8l-1.1 1.1a13.6 13.6 0 0 0 5.1 5.1l1.1-1.1a1.7 1.7 0 0 1 1.8-.4c.8.3 1.6.5 2.4.6a1.7 1.7 0 0 1 1.5 1.8z"
      />
    </Svg>
  );
}
