import { describe, expect, it } from "vitest";
import {
  credibilityClients,
  credibilityFromContent,
  credibilityStats,
} from "./stats";

/**
 * The band renders whatever these return, so these rules are the band's
 * behaviour: a blank slot disappears, the accent is optional, and the pill
 * list never repeats a country.
 */

describe("credibilityStats", () => {
  it("returns nothing when every slot is blank", () => {
    expect(credibilityStats({})).toEqual([]);
  });

  it("keeps the declared order and trims each part", () => {
    const stats = credibilityStats({
      statsStat1Value: " 100 ",
      statsStat1Accent: " % ",
      statsStat1Label: " Job Success Score ",
      statsStat2Value: "7",
      statsStat2Accent: "+",
      statsStat2Label: "Years experience",
    });

    expect(stats).toEqual([
      { value: "100", accent: "%", label: "Job Success Score" },
      { value: "7", accent: "+", label: "Years experience" },
    ]);
  });

  it("drops a slot with no value but keeps the ones after it", () => {
    const stats = credibilityStats({
      statsStat1Value: "",
      statsStat1Label: "Hidden",
      statsStat2Value: "Top Rated",
      statsStat2Label: "On Upwork",
    });

    expect(stats).toEqual([
      { value: "Top Rated", accent: "", label: "On Upwork" },
    ]);
  });

  it("treats a missing accent as an empty string, not undefined", () => {
    const [stat] = credibilityStats({ statsStat1Value: "7" });

    expect(stat.accent).toBe("");
  });
});

describe("credibilityClients", () => {
  it("returns nothing for an empty list", () => {
    expect(credibilityClients("")).toEqual([]);
    expect(credibilityClients("  ,  , ")).toEqual([]);
  });

  it("splits, trims and preserves order", () => {
    expect(credibilityClients(" US, UK ,Italy")).toEqual(["US", "UK", "Italy"]);
  });

  it("removes duplicates case-insensitively", () => {
    expect(credibilityClients("US, us, UK")).toEqual(["US", "UK"]);
  });

  it("caps the list so the pills cannot become a paragraph", () => {
    const many = Array.from({ length: 20 }, (_, i) => `C${i}`).join(",");

    expect(credibilityClients(many)).toHaveLength(14);
  });
});

describe("credibilityFromContent", () => {
  it("resolves the whole band from page content", () => {
    const band = credibilityFromContent({
      statsStat1Value: "100",
      statsStat1Accent: "%",
      statsStat1Label: "Job Success Score",
      statsClientsLabel: "Clients in",
      statsClients: "US, UK",
    });

    expect(band.stats).toHaveLength(1);
    expect(band.clientsLabel).toBe("Clients in");
    expect(band.clients).toEqual(["US", "UK"]);
  });
});
