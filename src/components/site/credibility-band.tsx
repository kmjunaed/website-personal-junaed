import type { CredibilityStat } from "@/lib/stats";

/**
 * Credibility band — the strip directly under the hero.
 *
 * Why it sits here: a first-time visitor reads the headline, then immediately
 * looks for a reason to believe it. Rating, success score and years are that
 * reason, and they belong above the fold-adjacent fold, before the services
 * pitch asks for attention.
 *
 * Design notes:
 * - Full-bleed violet-950 rather than a floating card. The hero already ends
 *   on a light background; a dark band gives the page a hard beat and makes the
 *   numbers the brightest thing on screen.
 * - Stats are separated by hairline rules, not boxes, so the row reads as one
 *   object. On mobile the rules rotate to horizontal and the stats stack.
 * - The client pills sit in a second row behind a top rule, which keeps the
 *   numbers as the primary read and the geography as supporting evidence.
 *
 * Every string comes from the `home` page registry, so the owner edits the
 * claims in admin and never in code.
 */
export function CredibilityBand({
  stats,
  clientsLabel,
  clients,
}: {
  stats: CredibilityStat[];
  clientsLabel: string;
  clients: string[];
}) {
  const showClients = clients.length > 0;

  // Nothing filled in means no band at all — an empty dark slab would be worse
  // than no band, so the section removes itself rather than rendering a frame.
  if (stats.length === 0 && !showClients) return null;

  return (
    <section
      aria-label="Track record"
      className="relative overflow-hidden bg-violet-950 text-white"
    >
      {/* A single soft orb, off-canvas right, so the band is not a flat slab. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[170px] right-[-120px] size-[300px] rounded-full bg-violet-500/12"
      />

      <div className="wrap relative z-1">
        {stats.length > 0 ? (
          <ul className="grid sm:grid-cols-3">
            {stats.map((stat, index) => (
              <li
                key={`${stat.value}-${index}`}
                className={[
                  "py-6 sm:py-9",
                  // Hairline rules between stats: horizontal when stacked,
                  // vertical once the row is side by side.
                  index > 0 ? "border-t border-white/12 sm:border-t-0" : "",
                  index > 0 ? "sm:border-l sm:border-white/12" : "",
                  index > 0 ? "sm:pl-8 lg:pl-10" : "",
                  index < stats.length - 1 ? "sm:pr-8 lg:pr-10" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <p className="font-display text-[clamp(2rem,4.4vw,2.75rem)] leading-[1.05] font-extrabold tracking-[-0.045em]">
                  {stat.value}
                  {stat.accent ? (
                    <span className="text-violet-300">
                      {/* A word accent ("Rated") needs a space; a unit ("%",
                          "+") must sit tight against the figure. */}
                      {/^[%+×x]/i.test(stat.accent) ? "" : " "}
                      {stat.accent}
                    </span>
                  ) : null}
                </p>
                {stat.label ? (
                  <p className="mt-2 text-[14px] leading-[1.5] text-white/65">
                    {stat.label}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}

        {showClients ? (
          <div
            className={[
              "flex flex-col gap-3.5 py-6 sm:flex-row sm:items-center sm:gap-5",
              stats.length > 0 ? "border-t border-white/12" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {clientsLabel ? (
              <p className="shrink-0 text-[13px] font-bold tracking-[0.02em] text-white">
                {clientsLabel}
              </p>
            ) : null}

            <ul className="flex flex-wrap gap-2">
              {clients.map((client) => (
                <li
                  key={client}
                  className="rounded-full border border-white/12 bg-white/6 px-3.5 py-1.5 text-[13px] leading-[1.4] font-medium text-white/80"
                >
                  {client}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
