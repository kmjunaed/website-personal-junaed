import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  contactRows,
  isExternalHref,
  legalNav,
  mainNav,
  socialLinks,
  type SocialPlatform,
} from "@/lib/site";
import { services } from "@/lib/content";
import {
  CallIcon,
  ChatIcon,
  MailIcon,
  PinIcon,
  SocialIcon,
  StarIcon,
} from "@/components/site/social-icons";

/**
 * Site footer.
 *
 * Four columns on desktop, stacked on mobile: brand and socials, pages,
 * services, and the contact block with the primary call to action. Everything
 * is driven by settings, so the owner edits copy and links in the admin panel
 * rather than in code.
 *
 * Rendered on the server on purpose: the copyright year needs no JS, and the
 * footer ships on every page.
 */

export type FooterProps = {
  siteName: string;
  shortName: string;
  role: string;
  bio: string;
  logoUrl: string | null;
  footerText: string;
  location: string;
  ctaLabel: string;
  ctaHref: string;
  email: string;
  phone: string;
  whatsapp: string;
  upwork: string;
  fiverr: string;
  socials: Partial<Record<SocialPlatform, string>>;
};

/** One row in the "Get in touch" column. */
function ContactRowItem({
  icon,
  label,
  href,
}: {
  icon: ReactNode;
  label: string;
  href?: string;
}) {
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="grid size-9 shrink-0 place-items-center rounded-[11px] bg-white/8 text-violet-300"
      >
        {icon}
      </span>
      <span className="text-[14.5px] leading-[1.45] text-white/80">{label}</span>
    </>
  );

  if (!href) {
    return <li className="flex items-center gap-3">{inner}</li>;
  }

  return (
    <li>
      <a
        href={href}
        {...(isExternalHref(href)
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group flex items-center gap-3 transition-opacity hover:opacity-100"
      >
        {inner}
      </a>
    </li>
  );
}

export function Footer(props: FooterProps) {
  const year = new Date().getFullYear();

  const socials = socialLinks(props.socials);
  const rows = contactRows({
    email: props.email,
    phone: props.phone,
    whatsapp: props.whatsapp,
    upwork: props.upwork,
    fiverr: props.fiverr,
    location: props.location,
  });

  const ctaLabel = (props.ctaLabel ?? "").trim();
  const ctaHref = (props.ctaHref ?? "").trim();
  const showCta = Boolean(ctaLabel && ctaHref);

  return (
    <footer className="mt-auto bg-violet-950 text-white">
      <div className="wrap py-12 lg:py-[62px]">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_1.15fr_1.25fr] lg:gap-9">
          {/* ---------------------------------------------------- brand --- */}
          <div>
            <Link href="/" className="flex items-center gap-3.5">
              {props.logoUrl ? (
                <Image
                  src={props.logoUrl}
                  alt=""
                  width={52}
                  height={52}
                  className="size-[52px] rounded-full object-cover ring-2 ring-white/15"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="grid size-[52px] place-items-center rounded-full bg-linear-145 from-violet-500 to-violet-800 text-[19px] font-extrabold text-white ring-2 ring-white/15"
                >
                  {props.shortName.charAt(0)}
                </span>
              )}
              <span className="min-w-0">
                <span className="block font-display text-[18px] font-extrabold tracking-[-0.03em] text-white">
                  {props.siteName}
                </span>
                {props.role ? (
                  <span className="mt-0.5 block text-[13.5px] font-medium text-violet-300">
                    {props.role}
                  </span>
                ) : null}
              </span>
            </Link>

            {props.bio ? (
              <p className="mt-5 max-w-[330px] text-[14.5px] leading-[1.7] text-white/65">
                {props.bio}
              </p>
            ) : null}

            {socials.length > 0 ? (
              <div className="mt-7">
                <p className="mb-3 text-[13px] font-bold tracking-[0.02em] text-white">
                  Follow me
                </p>
                <ul className="flex flex-wrap gap-2.5">
                  {socials.map((social) => (
                    <li key={social.platform}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="grid size-10 place-items-center rounded-[11px] bg-white/8 text-white/85 transition duration-200 hover:-translate-y-0.5 hover:bg-violet-500 hover:text-white"
                      >
                        <SocialIcon platform={social.platform} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          {/* ---------------------------------------------------- pages --- */}
          <nav aria-label="Footer pages">
            <h2 className="mb-4 font-display text-[15px] font-extrabold tracking-[-0.01em] text-white">
              Pages
            </h2>
            <ul className="flex flex-col gap-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14.5px] text-white/70 transition-colors hover:text-violet-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ------------------------------------------------- services --- */}
          <nav aria-label="Footer services">
            <h2 className="mb-4 font-display text-[15px] font-extrabold tracking-[-0.01em] text-white">
              Services
            </h2>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[14.5px] text-white/70 transition-colors hover:text-violet-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------------------------------------------- get in touch --- */}
          <div>
            <h2 className="mb-4 font-display text-[15px] font-extrabold tracking-[-0.01em] text-white">
              Get in touch
            </h2>

            {rows.length > 0 ? (
              <ul className="flex flex-col gap-3.5">
                {rows.map((row) => (
                  <ContactRowItem
                    key={`${row.kind}-${row.label}`}
                    icon={
                      row.kind === "email" ? (
                        <MailIcon />
                      ) : row.kind === "whatsapp" ? (
                        <ChatIcon />
                      ) : row.kind === "upwork" ? (
                        <StarIcon />
                      ) : row.kind === "fiverr" ? (
                        <StarIcon />
                      ) : row.kind === "phone" ? (
                        <CallIcon />
                      ) : (
                        <PinIcon />
                      )
                    }
                    label={row.label}
                    href={row.href}
                  />
                ))}
              </ul>
            ) : null}

            {showCta ? (
              <Link
                href={ctaHref}
                {...(isExternalHref(ctaHref)
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[13px] bg-violet-500 px-5 py-3.5 text-[14.5px] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-violet-400"
              >
                <ChatIcon />
                {ctaLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------- bottom --- */}
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-6 text-[13px] text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {props.siteName}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {props.footerText ? <p>{props.footerText}</p> : null}
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-violet-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
