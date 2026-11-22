/**
 * Contact-page FAQ.
 *
 * These are the objections that come up before a project starts, not product
 * questions. Kept as data rather than JSX so the copy is one place to edit and
 * the list can be tested.
 *
 * Five is the ceiling the design holds: past that the left column runs longer
 * than the form beside it and the section stops reading as a sidebar.
 */

export type FaqItem = {
  question: string;
  answer: string;
};

export const contactFaq: FaqItem[] = [
  {
    question: "An agency burned me before. Why is this different?",
    answer:
      "You work with me directly, not an account manager relaying messages. Scope, price and timeline are agreed in writing before anything starts, and you can stop at the end of any phase. If the work is not moving the number we agreed on, I will say so before you have to ask.",
  },
  {
    question: "SEO takes too long. What do I get early on?",
    answer:
      "The first ninety days are technical fixes and content groundwork, and those show up as a healthier site before rankings move: faster pages, clean indexation, no crawl waste. Rankings follow over the next six months. Anyone promising a fast organic win is selling you something else.",
  },
  {
    question: "Can one person really handle SEO, ads, content and a website?",
    answer:
      "For a growing brand, yes — and it is usually better than stitching six freelancers together. The six services share one strategy, one keyword map and one reporting view, so the site, the content, the ads and the AI answers stop contradicting each other. Where a job genuinely needs a specialist, I say so and bring one in.",
  },
  {
    question: "Can you guarantee #1 rankings?",
    answer:
      "No, and you should not trust anyone who does. Google does not sell positions and the algorithm changes. What I can commit to is the work that reliably moves rankings — technical health, intent-matched content, and links worth having — plus honest monthly reporting on what changed.",
  },
];
