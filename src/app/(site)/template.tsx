import type { ReactNode } from "react";

/**
 * Public site page transition.
 *
 * A `template.tsx` is remounted on every navigation (unlike a layout, which
 * persists), so the wrapper node is new each time and its CSS animation replays.
 * That gives each page a short fade-and-settle from the top instead of a hard
 * content swap after the router resets the scroll position.
 *
 * Deliberately a server component with no JS: the animation is pure CSS and
 * lives in globals.css under `.page-enter`, gated on
 * `prefers-reduced-motion: no-preference`. A visitor who asked for less motion
 * gets the content immediately, with no opacity dip.
 *
 * Keep this wrapper free of `position: fixed` descendants in mind — the
 * translate creates a containing block for the ~420ms the animation runs.
 */
export default function SiteTemplate({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
