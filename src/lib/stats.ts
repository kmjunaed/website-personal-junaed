/**
 * Credibility band — pure parsing for the home page stats strip.
 *
 * The band sits directly under the hero and carries the numbers a visitor
 * checks before reading anything else: rating, success score, years. Those are
 * claims about the owner, so they live in the `home` page registry and are
 * edited in admin like every other string on the page (D-025).
 *
 * This module is pure on purpose (B1): the page form and the public page both
 * import it, so it must never reach for `@/db`.
 */

import type { PageContent } from "./pages-definitions";

export type CredibilityStat = {
  /** The number or short phrase, rendered in the display face. */
  value: string;
  /** The unit or trailing word, rendered in violet. Empty is valid. */
  accent: string;
  /** The caption under the value. */
  label: string;
};

/** How many stat slots the registry declares. Keep in step with the fields. */
const STAT_SLOTS = 3;

/**
 * A pill wall stops being readable long before it stops fitting, so the list
 * is capped rather than allowed to wrap into a paragraph of country names.
 */
const MAX_CLIENTS = 14;

/**
 * Read the stat slots in order, dropping any slot with no value.
 *
 * A blank value is how the owner removes a stat: the registry always declares
 * three slots, but the band renders only the ones actually filled in.
 */
export function credibilityStats(content: PageContent): CredibilityStat[] {
  const stats: CredibilityStat[] = [];

  for (let slot = 1; slot <= STAT_SLOTS; slot += 1) {
    const value = (content[`statsStat${slot}Value`] ?? "").trim();
    if (!value) continue;

    stats.push({
      value,
      accent: (content[`statsStat${slot}Accent`] ?? "").trim(),
      label: (content[`statsStat${slot}Label`] ?? "").trim(),
    });
  }

  return stats;
}

/**
 * Split the comma-separated client list into pills.
 *
 * Order is preserved, blanks are dropped, and duplicates are removed
 * case-insensitively — "US, us" is one pill, not two.
 */
export function credibilityClients(csv: string): string[] {
  const seen = new Set<string>();
  const clients: string[] = [];

  for (const entry of (csv ?? "").split(",")) {
    const name = entry.trim();
    if (!name) continue;

    const key = name.toLowerCase();
    if (seen.has(key)) continue;

    seen.add(key);
    clients.push(name);

    if (clients.length === MAX_CLIENTS) break;
  }

  return clients;
}

/** Everything the band needs, resolved from the page content in one call. */
export function credibilityFromContent(content: PageContent) {
  return {
    stats: credibilityStats(content),
    clientsLabel: (content.statsClientsLabel ?? "").trim(),
    clients: credibilityClients(content.statsClients ?? ""),
  };
}
