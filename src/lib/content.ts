/**
 * Seed content for Phase 1.
 *
 * Everything here is typed and static so the public site can be built and
 * reviewed before the database exists. Phase 3/4 replaces each export with a
 * server-side query (Drizzle) that returns the same shapes, so components do
 * not need to change — only the data source does.
 */

export type Service = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  /** Long-form body for /services/[slug]. Plain paragraphs for now. */
  body: string[];
  deliverables: string[];
  sortOrder: number;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  /** Which of the three illustrative art treatments to render. */
  art: 1 | 2 | 3;
  tags: string[];
  client: string;
  year: string;
  featured: boolean;
  /** Case-study body for /portfolio/[slug]. */
  challenge: string;
  approach: string[];
  results: { label: string; value: string }[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  body: string[];
};

export const services: Service[] = [
  {
    slug: "paid-advertising",
    title: "Paid Advertising",
    icon: "↗",
    summary:
      "Paid campaigns on Google, Meta and LinkedIn that buy attention from the right people and are judged on what they return, not what they reach.",
    body: [
      "Most paid media fails for a boring reason: the campaign was built to spend a budget, not to answer a question. Which audience, which promise, which creative, and what number tells us it worked — if those four are not settled before launch, the platform will happily take the money and report impressions.",
      "I build campaigns around one audience and one promise at a time, test the message at a budget small enough to lose, and only then scale the spend. Audience research first, creative second, media buying third — in that order, every time.",
      "You get a plan you can actually run: channels, creative, budget, and the single metric that decides whether we keep going. Reporting is monthly and honest, including the months where the answer is stop.",
    ],
    deliverables: [
      "Audience and competitor research",
      "Channel plan and budget split",
      "Ad creative and copy",
      "Landing page recommendations",
      "Conversion tracking setup",
      "Monthly performance reporting",
    ],
    sortOrder: 1,
  },
  {
    slug: "full-stack-seo",
    title: "Full Stack SEO",
    icon: "⌕",
    summary:
      "Technical SEO, on-page work, content strategy and links — the whole stack, in the order that actually moves rankings.",
    body: [
      "SEO gets sold as one thing and is really four: a site Google can crawl, pages that answer a query better than what ranks above them, a content plan that compounds, and links worth having. Skip any of the four and the other three underperform.",
      "I start with the technical audit — crawlability, indexation, speed, structured data — because nothing else matters if Google cannot read the site properly. Then keyword and intent mapping, then content built to answer those queries, then authority work that is not a link farm.",
      "The first ninety days are usually unglamorous fixes. The curve bends somewhere in months four to nine. I report on clicks and revenue, not on rankings for their own sake.",
    ],
    deliverables: [
      "Technical SEO audit with prioritised fixes",
      "Keyword and intent mapping",
      "On-page optimisation for key pages",
      "Content briefs and editorial calendar",
      "Internal linking plan",
      "Digital PR and link acquisition",
      "Monthly rank, traffic and conversion reporting",
    ],
    sortOrder: 2,
  },
  {
    slug: "ai-seo",
    title: "AI SEO (GEO, AEO, LLM SEO)",
    icon: "✦",
    summary:
      "Get cited by ChatGPT, Perplexity, Google AI Overviews and the answer engines your buyers now ask instead of scrolling.",
    body: [
      "Search is splitting in two. One half is still ten blue links. The other half is a person asking a model a question and reading one answer — and if your brand is not inside that answer, you were not in the consideration set at all.",
      "Generative engine optimisation is not a new trick layer on top of SEO. It is the same foundation — crawlable pages, clear claims, real expertise — plus the things models actually reward: direct answers near the top, clean entity and schema markup, consistent facts across the web, and citations from sources the models trust.",
      "I work the whole surface: structure pages so an answer engine can lift a clean sentence, mark up entities so the model knows who you are, and build the third-party mentions that make a model comfortable naming you. Then I track whether you are being cited, which is the only metric that matters here.",
    ],
    deliverables: [
      "AI visibility audit across major answer engines",
      "Answer-first content restructuring",
      "Entity and schema markup",
      "llms.txt and crawler access configuration",
      "Citation and mention building",
      "Prompt-set tracking and monthly citation reporting",
    ],
    sortOrder: 3,
  },
  {
    slug: "content-social-media",
    title: "Content & Social Media",
    icon: "✳",
    summary:
      "Editorial and social content that carries one message across every channel, built to be published consistently rather than in bursts.",
    body: [
      "Content fails in two ways: it is written for nobody in particular, or it is published for three weeks and abandoned. Both are strategy problems, not writing problems.",
      "I start from the questions your buyers actually ask, map them to the channels where those questions get asked, and build a calendar your team can sustain. Long-form for search and authority, short-form for feeds, and a repurposing path so one good idea does not die after a single post.",
      "Design is part of it, not an afterthought: templates that keep the feed coherent without a designer on call for every post.",
    ],
    deliverables: [
      "Content strategy and channel plan",
      "Editorial calendar",
      "Long-form articles and landing copy",
      "Social post templates and creative",
      "Repurposing workflow",
      "Monthly performance review",
    ],
    sortOrder: 4,
  },
  {
    slug: "wordpress-design-development",
    title: "WordPress Design & Development",
    icon: "⌘",
    summary:
      "Fast, editor-friendly WordPress sites — designed, built and handed over so your team can run them without breaking the layout.",
    body: [
      "WordPress is a good tool that is very easy to make bad. A stack of plugins, a heavy theme, and no caching will produce a site that looks fine on your laptop and takes six seconds to load on a customer's phone.",
      "I design and build with performance and editing experience as equal priorities: a light theme, a curated plugin set, proper caching, and an admin area your team can actually use. Design decisions are made at the size people will see the page, which is a phone.",
      "If you already have a site, I audit it first and tell you what is worth keeping before quoting a rebuild. If a rebuild is not the answer, I will say that too.",
    ],
    deliverables: [
      "Custom theme design and build",
      "Performance and Core Web Vitals work",
      "Plugin audit and cleanup",
      "Editor-friendly page templates",
      "Migration and launch handling",
      "Handover documentation and training",
    ],
    sortOrder: 5,
  },
  {
    slug: "graphics-design",
    title: "Graphics Design",
    icon: "◈",
    summary:
      "Brand visuals, campaign creative and social assets that say what you do before anyone reads a word.",
    body: [
      "Good design is not decoration. It is the fastest way to tell someone what you do, who it is for, and why they should care — before they have read a single word.",
      "I work from your positioning outward: type, colour and layout chosen to carry a specific message, not to follow whatever is trending this month. Every asset is built to work at the size people will actually see it, which is a phone screen, in a feed, for about two seconds.",
      "Deliverables are organised and named so your team can keep using them without me, and the templates are built so a non-designer can produce an on-brand post.",
    ],
    deliverables: [
      "Brand visual direction and guidelines",
      "Social media templates",
      "Campaign creative sets",
      "Pitch and presentation design",
      "Print collateral where needed",
      "Editable source files and handover",
    ],
    sortOrder: 6,
  },
];

export const projects: Project[] = [
  {
    slug: "campaign-creative-strategy",
    title: "Campaign Creative & Strategy",
    summary:
      "Digital campaign direction with visual assets and audience-focused messaging.",
    art: 1,
    tags: ["Digital Marketing", "Creative"],
    client: "Illustrative placeholder",
    year: "2025",
    featured: true,
    challenge:
      "A regional service business was spending consistently on paid social with no clear picture of which creative was doing the work. Every campaign looked different, so nothing could be compared against anything else.",
    approach: [
      "Audited twelve months of ad history and grouped creative by message rather than by visual style.",
      "Identified two message angles that carried almost all of the conversions, and retired the rest.",
      "Built a repeatable creative template so new assets stayed comparable.",
      "Set a single primary metric per campaign so results were readable month to month.",
    ],
    results: [
      { label: "Creative variants tested", value: "24" },
      { label: "Message angles kept", value: "2 of 9" },
      { label: "Reporting cadence", value: "Monthly" },
    ],
  },
  {
    slug: "organic-search-growth",
    title: "Organic Search Growth",
    summary:
      "Search-focused improvements designed to increase discovery and relevant traffic.",
    art: 2,
    tags: ["SEO", "Optimization"],
    client: "Illustrative placeholder",
    year: "2025",
    featured: true,
    challenge:
      "A content site had hundreds of published pages and almost no organic traffic. Google was indexing a fraction of them, and the pages that did rank were the ones nobody wanted.",
    approach: [
      "Ran a full crawl and found the majority of pages were orphaned with no internal links pointing at them.",
      "Consolidated thin, overlapping pages into fewer, stronger ones.",
      "Rebuilt the internal linking structure around topic clusters.",
      "Rewrote titles and descriptions on the pages that already had impressions but no clicks.",
    ],
    results: [
      { label: "Pages consolidated", value: "180 → 64" },
      { label: "Indexed pages", value: "+3.4×" },
      { label: "Focus", value: "Clicks, not rankings" },
    ],
  },
  {
    slug: "website-brand-visuals",
    title: "Website & Brand Visuals",
    summary:
      "Clean web layouts and consistent visual styling for a memorable online presence.",
    art: 3,
    tags: ["WordPress", "Graphic Design"],
    client: "Illustrative placeholder",
    year: "2024",
    featured: true,
    challenge:
      "A small team had grown their site organically over four years. It worked, but every page had been designed by a different person at a different time, and the brand felt like four companies sharing a domain.",
    approach: [
      "Defined a small design system: two typefaces, one accent colour, one spacing scale.",
      "Rebuilt the page templates in WordPress so new pages inherit the system automatically.",
      "Cut the plugin count and replaced three page-builder plugins with native blocks.",
      "Documented the editing workflow for the team in a short internal guide.",
    ],
    results: [
      { label: "Page templates", value: "6" },
      { label: "Plugins removed", value: "11" },
      { label: "Editing", value: "No page builder" },
    ],
  },
];

export const posts: Post[] = [
  {
    slug: "why-your-seo-audit-keeps-saying-the-same-thing",
    title: "Why your SEO audit keeps saying the same thing",
    excerpt:
      "If the same six issues show up in every audit you commission, the problem is not the audit. It is that nobody owns the fixes.",
    category: "SEO",
    publishedAt: "2026-10-14",
    readingMinutes: 5,
    body: [
      "I have read a lot of SEO audits. The good ones are specific, prioritised, and honest about what will not move the needle. The bad ones are forty pages of the same six findings, delivered quarterly, to a client who has already been told about all of them.",
      "The pattern is almost never a knowledge problem. Everyone in the room knows the images need alt text and the redirect chains need flattening. The pattern is an ownership problem: the audit names work, but nobody is assigned the work, so it rolls into the next audit and gets named again.",
      "The fix is unglamorous. Take the audit, pick the three items with the highest expected impact, and put a name and a date against each one. Everything else goes on a list you look at next quarter. An audit that produces three completed fixes beats one that produces forty recommendations every time.",
      "If you are commissioning audits and seeing the same findings repeat, ask a simpler question before the next one: who is doing the work, and by when? If there is no answer, the audit is not your bottleneck.",
    ],
  },
  {
    slug: "the-real-cost-of-a-heavy-wordpress-theme",
    title: "The real cost of a heavy WordPress theme",
    excerpt:
      "A theme that ships every feature costs you on every page load, for every visitor, forever. That is a strange thing to pay for.",
    category: "WordPress",
    publishedAt: "2026-09-22",
    readingMinutes: 6,
    body: [
      "Premium themes are sold on flexibility. Buy this one and you can build anything. The pitch is honest, and it is exactly the problem: you are paying, on every single page load, for the ability to build things you are not building.",
      "A typical multipurpose theme loads dozens of scripts and stylesheets regardless of which template you use. The slider library loads on pages with no slider. The icon font loads on pages with no icons. The page builder loads its entire runtime so it can render four headings and a button.",
      "None of this is visible on a fast laptop on office wifi. All of it is visible on a mid-range Android phone on a train, which is where most of your visitors actually are.",
      "The alternative is not a hand-coded site nobody can edit. It is a light theme with a small, curated plugin set and native blocks for layout. You lose the ability to build anything. You gain a site that loads quickly on the devices that matter, and an admin area a non-developer can use without breaking the design.",
    ],
  },
  {
    slug: "what-a-marketing-budget-is-actually-for",
    title: "What a marketing budget is actually for",
    excerpt:
      "Most marketing budgets buy activity. Very few buy information. The second kind is worth more.",
    category: "Digital Marketing",
    publishedAt: "2026-08-30",
    readingMinutes: 4,
    body: [
      "There is a version of marketing spend that buys reach, and a version that buys knowledge. The first is easy to report on and hard to learn from. The second looks inefficient for a quarter and then pays for itself repeatedly.",
      "Buying knowledge means deliberately funding things whose main output is a decision: a small test of a new message, a landing page variant, a channel you have never tried at a budget small enough to lose. The point is not the campaign. The point is what you know afterwards.",
      "The trap is that knowledge spend is hard to defend in a monthly report. It looks like a small campaign with modest results. It is actually a cheap experiment that stopped you spending six figures on the wrong audience for a year.",
      "If your budget is entirely allocated to things you already know work, you are not marketing. You are harvesting. That is fine for a while, and then the market moves.",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
