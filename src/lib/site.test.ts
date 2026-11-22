import { describe, expect, it } from "vitest";
import {
  contactRows,
  isExternalHref,
  socialLinks,
  SOCIAL_PLATFORMS,
} from "./site";

/**
 * The footer renders whatever these return, so the rules they encode are the
 * footer's behaviour: empty settings must produce no dead links, and the order
 * of the contact rows is fixed regardless of which fields are filled.
 */

describe("socialLinks", () => {
  it("returns nothing when every URL is blank", () => {
    expect(socialLinks({})).toEqual([]);
    expect(socialLinks({ linkedin: "", x: "   " })).toEqual([]);
  });

  it("keeps only the platforms that have a URL", () => {
    const links = socialLinks({
      linkedin: "https://linkedin.com/in/x",
      x: "",
      github: "https://github.com/x",
    });

    expect(links.map((link) => link.platform)).toEqual(["linkedin", "github"]);
  });

  it("orders by SOCIAL_PLATFORMS, not by the input object", () => {
    const links = socialLinks({
      github: "https://github.com/x",
      facebook: "https://facebook.com/x",
    });

    const expected = SOCIAL_PLATFORMS.filter(
      (platform) => platform === "facebook" || platform === "github",
    );
    expect(links.map((link) => link.platform)).toEqual(expected);
  });

  it("trims the stored URL and supplies a human label", () => {
    const [link] = socialLinks({ youtube: "  https://youtube.com/@x  " });

    expect(link.href).toBe("https://youtube.com/@x");
    expect(link.label).toBe("YouTube");
  });
});

describe("contactRows", () => {
  const empty = { email: "", phone: "", whatsapp: "", upwork: "", fiverr: "", location: "" };

  it("returns nothing when every field is blank", () => {
    expect(contactRows(empty)).toEqual([]);
  });

  it("builds a mailto link for the email", () => {
    const [row] = contactRows({ ...empty, email: "hello@example.com" });

    expect(row.kind).toBe("email");
    expect(row.href).toBe("mailto:hello@example.com");
  });

  it("strips formatting from the phone number in the tel link", () => {
    const [row] = contactRows({ ...empty, phone: "+880 (171) 234-5678" });

    expect(row.href).toBe("tel:+8801712345678");
    expect(row.label).toBe("+880 (171) 234-5678");
  });

  it("builds a Fiverr row only when the profile URL is set", () => {
    expect(contactRows({ ...empty, fiverr: "  " })).toEqual([]);

    const [row] = contactRows({ ...empty, fiverr: "https://fiverr.com/junaed" });

    expect(row.kind).toBe("fiverr");
    expect(row.label).toBe("Hire me on Fiverr");
    expect(row.href).toBe("https://fiverr.com/junaed");
  });

  it("gives the location row no href, so it renders as text", () => {    const [row] = contactRows({ ...empty, location: "Serving clients worldwide" });

    expect(row.kind).toBe("location");
    expect(row.href).toBeUndefined();
  });

  it("keeps a fixed order regardless of which fields are filled", () => {
    const rows = contactRows({
      email: "a@b.co",
      phone: "+1",
      whatsapp: "https://wa.me/1",
      upwork: "https://upwork.com/x",
      fiverr: "https://fiverr.com/x",
      location: "Worldwide",
    });

    expect(rows.map((row) => row.kind)).toEqual([
      "email",
      "whatsapp",
      "phone",
      "fiverr",
      "upwork",
      "location",
    ]);
  });
});

describe("isExternalHref", () => {
  it("treats site paths as internal", () => {
    expect(isExternalHref("/contact")).toBe(false);
    expect(isExternalHref("/services/seo")).toBe(false);
  });

  it("treats absolute URLs as external", () => {
    expect(isExternalHref("https://example.com")).toBe(true);
    expect(isExternalHref("//example.com")).toBe(true);
  });

  it("treats mailto and tel as external", () => {
    expect(isExternalHref("mailto:a@b.co")).toBe(true);
    expect(isExternalHref("tel:+123")).toBe(true);
  });
});
