/**
 * Site-wide configuration and navigation.
 *
 * Phase 1: static. Phase 3 replaces these values with rows from the
 * `settings` and `menu_items` tables (see MVP.md §3.3).
 */

export const site = {
  name: "Junaed Hossain",
  shortName: "JH",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://junaedhossain.com",
  adminUrl: process.env.ADMIN_URL ?? "https://admin.junaedhossain.com",
  title: "Junaed Hossain — Digital Growth & Creative Solutions",
  description:
    "Junaed Hossain — Digital marketing, SEO, graphic design and WordPress customization. Helping brands build a stronger digital presence.",
  tagline: "Digital solutions for growing brands",
  email: "hello@junaedhossain.com",
  themeColor: "#271164",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

/* --------------------------------------------------------------------------
   Footer
   -------------------------------------------------------------------------- */

/** The brand marks the footer can render. Order here is the display order. */
export const SOCIAL_PLATFORMS = [
  "facebook",
  "instagram",
  "linkedin",
  "x",
  "youtube",
  "tiktok",
  "github",
] as const;

export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];

export const SOCIAL_LABELS: Record<SocialPlatform, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  x: "X",
  youtube: "YouTube",
  tiktok: "TikTok",
  github: "GitHub",
};

/**
 * Build the social list from settings, dropping anything unset.
 *
 * A blank URL is the normal state for a new site, and an icon linking to ""
 * would be a dead control. Filtering here means the footer renders only what
 * the owner has actually filled in.
 */
export function socialLinks(urls: Partial<Record<SocialPlatform, string>>) {
  return SOCIAL_PLATFORMS.filter((platform) => urls[platform]?.trim()).map(
    (platform) => ({
      platform,
      label: SOCIAL_LABELS[platform],
      href: (urls[platform] as string).trim(),
    }),
  );
}
/**
 * "Get in touch" rows, in display order, skipping empty values.
 *
 * Each row is either a link (mailto, WhatsApp, Upwork) or plain text (the
 * availability line), so the footer can render one list and let the presence of
 * `href` decide the element.
 */
export type ContactRow = {
  kind: "email" | "whatsapp" | "upwork" | "location" | "phone";
  label: string;
  href?: string;
};

export function contactRows(input: {
  email: string;
  phone: string;
  whatsapp: string;
  upwork: string;
  location: string;
}): ContactRow[] {
  const rows: ContactRow[] = [];

  // Every field is read through `?? ""`: settings are cached, so a value
  // written by an older registry can be missing entirely, and a footer must
  // never throw over a blank link.
  const email = (input.email ?? "").trim();
  const phone = (input.phone ?? "").trim();
  const whatsapp = (input.whatsapp ?? "").trim();
  const upwork = (input.upwork ?? "").trim();
  const location = (input.location ?? "").trim();

  if (email) {
    rows.push({ kind: "email", label: email, href: `mailto:${email}` });
  }
  if (whatsapp) {
    rows.push({ kind: "whatsapp", label: "Chat on WhatsApp", href: whatsapp });
  }
  if (phone) {
    rows.push({
      kind: "phone",
      label: phone,
      href: `tel:${phone.replace(/[^\d+]/g, "")}`,
    });
  }
  if (upwork) {
    rows.push({ kind: "upwork", label: "Hire me on Upwork", href: upwork });
  }
  if (location) {
    rows.push({ kind: "location", label: location });
  }

  return rows;
}

/** True for a link that must open in a new tab (anything not site-relative). */
export function isExternalHref(href: string): boolean {
  return /^(https?:)?\/\//i.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
}
