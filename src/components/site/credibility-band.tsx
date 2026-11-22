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
 * - A soft violet wash, not a dark slab. The first version was violet-950 and
 *   read as a heavy block sitting between two light sections; the eye had to
 *   re-adjust twice in one screen. This version keeps the band's job (a
 *   distinct beat that groups the three numbers) while staying in the same
 *   tonal family as the hero, so the page flows instead of stuttering.
 * - The gradient is deliberately low-contrast and multi-stop: violet-50 at
 *   both edges fading through white in the middle, plus one wide radial glow
 *   behind the stats. That reads as light falling across the band rather than
 *   a flat fill, which is what makes it feel calm instead of coloured-in.
 * - Hairline rules top and bottom do the separating work the dark fill used to
 *   do, so the band still has edges without a hard colour change.
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

  // Nothing filled in means no band at all — an empty strip would be worse
  // than no band, so the section removes itself rather than rendering a frame.
  if (stats.length === 0 && !showClients) return null;

  return (
    <section
      aria-label="Track record"
      className="relative overflow-hidden border-y border-line bg-linear-115 from-violet-50 via-white to-violet-50"
    >
      {/* Wide, very soft glow behind the stats. Low opacity on purpose: it
          should register as light, not as a shape. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[220px] left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(127_93_245/0.10),transparent)]"
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
                  index > 0 ? "border-t border-line sm:border-t-0" : "",
                  index > 0 ? "sm:border-l sm:border-line" : "",
                  index > 0 ? "sm:pl-8 lg:pl-10" : "",
                  index < stats.length - 1 ? "sm:pr-8 lg:pr-10" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <p className="font-display text-[clamp(2rem,4.4vw,2.75rem)] leading-[1.05] font-extrabold tracking-[-0.045em] text-ink">
                  {stat.value}
                  {stat.accent ? (
                    <span className="text-violet-600">
                      {/* A word accent ("Rated") needs a space; a unit ("%",
                          "+") must sit tight against the figure. */}
                      {/^[%+×x]/i.test(stat.accent) ? "" : " "}
                      {stat.accent}
                    </span>
                  ) : null}
                </p>
                {stat.label ? (
                  <p className="mt-2 text-[14px] leading-[1.5] text-muted">
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
              stats.length > 0 ? "border-t border-line" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {clientsLabel ? (
              <p className="shrink-0 text-[13px] font-bold tracking-[0.02em] text-ink">
                {clientsLabel}
              </p>
            ) : null}

            <ul className="flex flex-wrap gap-2">
              {clients.map((client) => (
                <li
                  key={client}
                  className="rounded-full border border-violet-100 bg-white px-3.5 py-1.5 text-[13px] leading-[1.4] font-medium text-[#4b4760] shadow-[0_1px_2px_rgb(39_17_100/0.04)]"
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
