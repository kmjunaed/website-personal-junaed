/**
 * Settings registry — pure, no database import.
 *
 * Split out of lib/settings.ts on purpose (B1): a `"use client"` form must be
 * able to import the field definitions and types without dragging the `pg`
 * driver into the browser bundle, which fails the build. This file has no
 * server-only dependency, so both the client form and the server reader can
 * import it.
 */

export type SettingKind =
  | "text"
  | "textarea"
  | "email"
  | "boolean"
  | "number"
  | "image";

export type SettingDefinition = {
  key: string;
  label: string;
  kind: SettingKind;
  /** Grouping in the admin form. */
  group: "Identity" | "Contact" | "SEO" | "Analytics" | "Footer" | "Security" | "System";
  help?: string;
  placeholder?: string;
  /** Used when the row is missing or unreadable. */
  default: string | number | boolean;
  maxLength?: number;
};

/**
 * The single source of truth. Order here is the order in the admin form.
 */
export const SETTING_DEFINITIONS: readonly SettingDefinition[] = [
  {
    key: "site.name",
    label: "Site name",
    kind: "text",
    group: "Identity",
    default: "Junaed Hossain",
    maxLength: 120,
    help: "Used in the header, footer, page titles and emails.",
  },
  {
    key: "site.shortName",
    label: "Short name / initials",
    kind: "text",
    group: "Identity",
    default: "JH",
    maxLength: 4,
    help: "One or two characters for the logo mark.",
  },
  {
    key: "site.tagline",
    label: "Tagline",
    kind: "text",
    group: "Identity",
    default: "Digital solutions for growing brands",
    maxLength: 160,
    help: "The eyebrow line above the hero heading.",
  },
  {
    key: "site.role",
    label: "Role / job title",
    kind: "text",
    group: "Identity",
    default: "Digital Marketer & Creative Strategist",
    maxLength: 120,
    help: "Shown under your name in the footer.",
  },
  {
    key: "site.description",
    label: "Site description",
    kind: "textarea",
    group: "Identity",
    default:
      "Paid advertising, SEO, AI search optimisation, content and WordPress design.",
    maxLength: 320,
    help: "Default meta description when a page has none of its own.",
  },
  {
    key: "site.logo",
    label: "Logo",
    kind: "image",
    group: "Identity",
    default: "",
    help: "Optional. When empty the site uses the initials mark.",
  },
  {
    key: "site.favicon",
    label: "Favicon",
    kind: "image",
    group: "Identity",
    default: "",
    help: "Square PNG or SVG, at least 64×64.",
  },
  {
    key: "site.email",
    label: "Contact email",
    kind: "email",
    group: "Contact",
    default: "hello@junaedhossain.com",
    maxLength: 254,
    help: "Shown on the contact page and used as the reply-to address.",
  },
  {
    key: "site.phone",
    label: "Phone",
    kind: "text",
    group: "Contact",
    default: "",
    maxLength: 40,
    help: "Optional. Leave blank to hide it on the contact page.",
  },
  {
    key: "site.timezone",
    label: "Timezone",
    kind: "text",
    group: "Contact",
    default: "Asia/Dhaka",
    maxLength: 60,
    help: "IANA name, e.g. Asia/Dhaka. Used for scheduled publishing.",
  },
  {
    key: "seo.titleTemplate",
    label: "Title template",
    kind: "text",
    group: "SEO",
    default: "%s | Junaed Hossain",
    maxLength: 120,
    help: "%s is replaced with the page title.",
  },
  {
    key: "seo.defaultDescription",
    label: "Default meta description",
    kind: "textarea",
    group: "SEO",
    default:
      "Paid advertising, SEO, AI search optimisation, content and WordPress design for growing brands.",
    maxLength: 320,
  },
  {
    key: "seo.defaultOgImage",
    label: "Default social share image",
    kind: "image",
    group: "SEO",
    default: "",
    help: "Used when a page or post has no image of its own. 1200×630 works best.",
  },
  {
    key: "seo.twitterHandle",
    label: "X / Twitter handle",
    kind: "text",
    group: "SEO",
    default: "",
    maxLength: 40,
    placeholder: "@junaedhossain",
    help: "Used for the Twitter card attribution. Include the @.",
  },
  {
    key: "seo.googleVerification",
    label: "Google Search Console code",
    kind: "text",
    group: "SEO",
    default: "",
    maxLength: 200,
    help: "The content value of the google-site-verification meta tag.",
  },
  {
    key: "seo.bingVerification",
    label: "Bing Webmaster code",
    kind: "text",
    group: "SEO",
    default: "",
    maxLength: 200,
    help: "The content value of the msvalidate.01 meta tag.",
  },
  {
    key: "site.url",
    label: "Public site URL",
    kind: "text",
    group: "SEO",
    default: "https://junaedhossain.com",
    maxLength: 200,
    help: "No trailing slash. Used for canonicals, the sitemap and structured data.",
  },
  {
    key: "site.socialLinkedin",
    label: "LinkedIn URL",
    kind: "text",
    group: "SEO",
    default: "",
    maxLength: 300,
    help: "Feeds the Person structured data so search engines can link your profiles.",
  },
  {
    key: "site.socialGithub",
    label: "GitHub URL",
    kind: "text",
    group: "SEO",
    default: "",
    maxLength: 300,
  },
  {
    key: "site.socialTwitter",
    label: "X / Twitter URL",
    kind: "text",
    group: "SEO",
    default: "",
    maxLength: 300,
  },
  {
    key: "footer.text",
    label: "Footer text",
    kind: "text",
    group: "Footer",
    default: "Crafted with care.",
    maxLength: 160,
    help: "Appears after the copyright line.",
  },
  {
    key: "footer.bio",
    label: "Footer bio",
    kind: "textarea",
    group: "Footer",
    default:
      "Paid ads, SEO, AI search, content, WordPress and design — one growth system, built around your business.",
    maxLength: 320,
    help: "The short paragraph under your name in the footer.",
  },
  {
    key: "footer.location",
    label: "Availability line",
    kind: "text",
    group: "Footer",
    default: "Serving clients worldwide",
    maxLength: 80,
    help: "Shown with a pin icon in the Get in touch column.",
  },
  {
    key: "footer.ctaLabel",
    label: "Footer button label",
    kind: "text",
    group: "Footer",
    default: "Book a free discovery call",
    maxLength: 60,
    help: "Leave the label or the link empty to hide the button.",
  },
  {
    key: "footer.ctaHref",
    label: "Footer button link",
    kind: "text",
    group: "Footer",
    default: "/contact",
    maxLength: 300,
    help: "An internal path like /contact, or a full https:// URL.",
  },
  {
    key: "site.socialInstagram",
    label: "Instagram URL",
    kind: "text",
    group: "Footer",
    default: "",
    maxLength: 300,
    help: "Leave empty to hide the icon.",
  },
  {
    key: "site.socialFacebook",
    label: "Facebook URL",
    kind: "text",
    group: "Footer",
    default: "",
    maxLength: 300,
  },
  {
    key: "site.socialYoutube",
    label: "YouTube URL",
    kind: "text",
    group: "Footer",
    default: "",
    maxLength: 300,
  },
  {
    key: "site.socialTiktok",
    label: "TikTok URL",
    kind: "text",
    group: "Footer",
    default: "",
    maxLength: 300,
  },
  {
    key: "site.whatsapp",
    label: "WhatsApp link",
    kind: "text",
    group: "Footer",
    default: "",
    maxLength: 300,
    help: "A wa.me link, e.g. https://wa.me/8801XXXXXXXXX.",
  },
  {
    key: "site.fiverr",
    label: "Fiverr profile URL",
    kind: "text",
    group: "Footer",
    default: "",
    maxLength: 300,
    help: "Shown in the footer's contact list. Leave empty to hide the row.",
  },
  {
    key: "site.upwork",
    label: "Upwork profile URL",
    kind: "text",
    group: "Footer",
    default: "",
    maxLength: 300,
  },
  {
    key: "email.fromName",
    label: "Email sender name",
    kind: "text",
    group: "System",
    default: "Junaed Hossain",
    maxLength: 120,
  },
  {
    key: "email.fromAddress",
    label: "Email sender address",
    kind: "email",
    group: "System",
    default: "hello@junaedhossain.com",
    maxLength: 254,
  },
  {
    key: "analytics.gtmId",
    label: "Google Tag Manager ID",
    kind: "text",
    group: "Analytics",
    default: "",
    maxLength: 40,
    placeholder: "GTM-XXXXXXX",
    help: "Loads the GTM container. If set, prefer putting GA4 and the pixel inside GTM.",
  },
  {
    key: "analytics.ga4Id",
    label: "GA4 measurement ID",
    kind: "text",
    group: "Analytics",
    default: "",
    maxLength: 40,
    placeholder: "G-XXXXXXXXXX",
    help: "Loaded directly. Leave empty if GA4 already fires through GTM.",
  },
  {
    key: "analytics.metaPixelId",
    label: "Meta Pixel ID",
    kind: "text",
    group: "Analytics",
    default: "",
    maxLength: 40,
    help: "Loaded directly. Leave empty if the pixel already fires through GTM.",
  },
  {
    key: "analytics.clarityId",
    label: "Microsoft Clarity ID",
    kind: "text",
    group: "Analytics",
    default: "",
    maxLength: 40,
    help: "Session recordings and heatmaps. Leave empty if it already fires through GTM.",
  },
  {
    key: "analytics.consentRequired",
    label: "Require cookie consent",
    kind: "boolean",
    group: "Analytics",
    default: true,
    help: "On: no tracking tag loads until the visitor accepts. Off: tags load immediately (only for jurisdictions that do not require consent).",
  },
  {
    key: "analytics.retentionMonths",
    label: "Analytics retention (months)",
    kind: "number",
    group: "System",
    default: 12,
    help: "How long first-party page view data is kept.",
  },
  {
    key: "maintenance.enabled",
    label: "Maintenance mode",
    kind: "boolean",
    group: "System",
    default: false,
    help: "When on, the public site shows a maintenance notice.",
  },
  {
    key: "contact.bannedKeywords",
    label: "Spam keywords",
    kind: "textarea",
    group: "Contact",
    default: "",
    maxLength: 4000,
    help: "One per line. A message containing these scores as spam. Leave empty to use the built-in list.",
  },
  {
    key: "security.spamMaxLinks",
    label: "Maximum links per message",
    kind: "number",
    group: "Security",
    default: 1,
    help: "Links beyond this count score as spam. One is normal for a signature.",
  },
  {
    key: "security.blockDisposableEmail",
    label: "Block disposable email domains",
    kind: "boolean",
    group: "Security",
    default: true,
    help: "Reject throwaway inboxes (mailinator, yopmail and similar) outright.",
  },
  {
    key: "security.autoBlockAfter",
    label: "Auto-block after repeated spam",
    kind: "number",
    group: "Security",
    default: 3,
    help: "Block the sender's IP after this many blocked submissions in 24 hours. Zero disables auto-blocking.",
  },
  {
    key: "security.loginAllowlist",
    label: "Admin IP allowlist",
    kind: "textarea",
    group: "Security",
    default: "",
    maxLength: 2000,
    help: "One IP or CIDR per line. When set, only these addresses may reach the admin login. Leave empty to allow everyone. Locking yourself out requires database access to undo.",
  },
  {
    key: "notify.telegramEnabled",
    label: "Telegram notifications",
    kind: "boolean",
    group: "Contact",
    default: true,
    help: "Send a Telegram message for each new enquiry. Requires TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.",
  },
  {
    key: "notify.emailEnabled",
    label: "Email notifications",
    kind: "boolean",
    group: "Contact",
    default: true,
    help: "Email you and auto-reply to the visitor. Requires RESEND_API_KEY.",
  },
] as const;

export const SETTING_GROUPS = [
  "Identity",
  "Contact",
  "SEO",
  "Footer",
  "Security",
  "System",
] as const;

export type SettingKey = (typeof SETTING_DEFINITIONS)[number]["key"];

const BY_KEY = new Map<string, SettingDefinition>(
  SETTING_DEFINITIONS.map((definition) => [definition.key, definition]),
);

export function settingDefinition(key: string): SettingDefinition | undefined {
  return BY_KEY.get(key);
}

/** Every setting, resolved and typed. Never contains `undefined`. */
export type SiteSettings = {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  description: string;
  logo: string;
  favicon: string;
  email: string;
  phone: string;
  timezone: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultOgImage: string;
  twitterHandle: string;
  googleVerification: string;
  bingVerification: string;
  siteUrl: string;
  socialLinkedin: string;
  socialGithub: string;
  socialTwitter: string;
  socialInstagram: string;
  socialFacebook: string;
  socialYoutube: string;
  socialTiktok: string;
  whatsapp: string;
  upwork: string;
  fiverr: string;
  footerText: string;
  footerBio: string;
  footerLocation: string;
  footerCtaLabel: string;
  footerCtaHref: string;
  emailFromName: string;
  emailFromAddress: string;
  gtmId: string;
  ga4Id: string;
  metaPixelId: string;
  clarityId: string;
  consentRequired: boolean;
  analyticsRetentionMonths: number;
  maintenanceEnabled: boolean;
  bannedKeywords: string;
  spamMaxLinks: number;
  blockDisposableEmail: boolean;
  autoBlockAfter: number;
  loginAllowlist: string;
  telegramEnabled: boolean;
  emailEnabled: boolean;
};

/** Map a registry key to the field name on SiteSettings. */
export const SETTING_FIELD_NAMES: Record<string, keyof SiteSettings> = {
  "site.name": "name",
  "site.shortName": "shortName",
  "site.tagline": "tagline",
  "site.role": "role",
  "site.description": "description",
  "site.logo": "logo",
  "site.favicon": "favicon",
  "site.email": "email",
  "site.phone": "phone",
  "site.timezone": "timezone",
  "seo.titleTemplate": "titleTemplate",
  "seo.defaultDescription": "defaultDescription",
  "seo.defaultOgImage": "defaultOgImage",
  "seo.twitterHandle": "twitterHandle",
  "seo.googleVerification": "googleVerification",
  "seo.bingVerification": "bingVerification",
  "site.url": "siteUrl",
  "site.socialLinkedin": "socialLinkedin",
  "site.socialGithub": "socialGithub",
  "site.socialTwitter": "socialTwitter",
  "site.socialInstagram": "socialInstagram",
  "site.socialFacebook": "socialFacebook",
  "site.socialYoutube": "socialYoutube",
  "site.socialTiktok": "socialTiktok",
  "site.whatsapp": "whatsapp",
  "site.upwork": "upwork",
  "site.fiverr": "fiverr",
  "footer.text": "footerText",
  "footer.bio": "footerBio",
  "footer.location": "footerLocation",
  "footer.ctaLabel": "footerCtaLabel",
  "footer.ctaHref": "footerCtaHref",
  "email.fromName": "emailFromName",
  "email.fromAddress": "emailFromAddress",
  "analytics.gtmId": "gtmId",
  "analytics.ga4Id": "ga4Id",
  "analytics.metaPixelId": "metaPixelId",
  "analytics.clarityId": "clarityId",
  "analytics.consentRequired": "consentRequired",
  "analytics.retentionMonths": "analyticsRetentionMonths",
  "maintenance.enabled": "maintenanceEnabled",
  "contact.bannedKeywords": "bannedKeywords",
  "security.spamMaxLinks": "spamMaxLinks",
  "security.blockDisposableEmail": "blockDisposableEmail",
  "security.autoBlockAfter": "autoBlockAfter",
  "security.loginAllowlist": "loginAllowlist",
  "notify.telegramEnabled": "telegramEnabled",
  "notify.emailEnabled": "emailEnabled",
};

/**
 * Coerce a stored JSONB value to the type the definition promises.
 *
 * A row can be anything: written by an older version, edited by hand, or
 * corrupted. Rather than trusting it, every value passes through here and
 * falls back to the documented default when it does not fit.
 */
export function coerceSetting(
  definition: SettingDefinition,
  raw: unknown,
): string | number | boolean {
  if (raw === null || raw === undefined) return definition.default;

  switch (definition.kind) {
    case "boolean":
      return typeof raw === "boolean" ? raw : definition.default;
    case "number": {
      const value = typeof raw === "number" ? raw : Number(raw);
      return Number.isFinite(value) ? value : definition.default;
    }
    default:
      return typeof raw === "string" ? raw : definition.default;
  }
}

/** Build the typed object from raw rows. Pure — used by the reader and tests. */
export function resolveSettings(
  rows: { key: string; value: unknown }[],
): SiteSettings {
  const stored = new Map(rows.map((row) => [row.key, row.value]));

  const resolved = {} as Record<keyof SiteSettings, string | number | boolean>;

  for (const definition of SETTING_DEFINITIONS) {
    const field = SETTING_FIELD_NAMES[definition.key];
    if (!field) continue;
    resolved[field] = coerceSetting(definition, stored.get(definition.key));
  }

  return resolved as SiteSettings;
}
