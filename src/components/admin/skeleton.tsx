/**
 * Skeleton primitives for the admin panel.
 *
 * The admin has no `loading.tsx` files, so every tab click shows the previous
 * page frozen until the server responds. These components give each route a
 * shape to render immediately.
 *
 * Two rules the whole file follows:
 *
 *  1. **Motion is opt-out.** Every animation sits behind `motion-safe:` (or the
 *     `prefers-reduced-motion: no-preference` convention already used in
 *     globals.css for `.js-reveal`). Someone who asked their OS not to animate
 *     things gets a static grey block, not a pulsing one.
 *  2. **The skeleton mirrors the real layout.** A placeholder of the wrong shape
 *     is worse than none: the page jumps when content lands. Each skeleton here
 *     is built from the same paddings and heights as the page it stands in for.
 *
 * Colour comes from the existing `--color-line` token so a skeleton never
 * introduces a new grey into the palette.
 */

import type { CSSProperties } from "react";

type SkeletonProps = {
  className?: string;
  style?: CSSProperties;
};

/**
 * The shimmer overlay.
 *
 * A travelling gradient rather than an opacity pulse: a pulse across a large
 * area reads as a flickering screen, while a highlight sweeping across reads as
 * "loading" and stays legible at low contrast.
 */
const SHIMMER =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full " +
  "before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent " +
  "motion-safe:before:animate-[jh-shimmer_1.6s_infinite]";

/** A single grey block. */
export function Skeleton({ className = "", style }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-md bg-line/70 ${SHIMMER} ${className}`}
      style={style}
    />
  );
}

/** A line of text. The last line is short, the way a real paragraph ends. */
export function SkeletonText({
  className = "",
  lines = 1,
}: {
  className?: string;
  lines?: number;
}) {
  return (
    <div className={`space-y-2 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-3 rounded bg-line/70 ${SHIMMER}`}
          style={{ width: index === lines - 1 && lines > 1 ? "62%" : "100%" }}
        />
      ))}
    </div>
  );
}

/** A page heading: title plus a one-line subtitle. */
export function SkeletonHeader() {
  return (
    <div className="space-y-2" aria-hidden="true">
      <div className={`h-7 w-44 rounded-md bg-line/70 ${SHIMMER}`} />
      <div className={`h-3.5 w-72 rounded bg-line/70 ${SHIMMER}`} />
    </div>
  );
}

/**
 * A table placeholder.
 *
 * Uses the same `rounded-[14px] border border-line bg-white` shell as the real
 * tables in the panel, so the border does not pop in when the data arrives.
 */
export function SkeletonTable({
  rows = 8,
  columns = 5,
}: {
  rows?: number;
  columns?: number;
}) {
  return (
    <div
      className="overflow-hidden rounded-[14px] border border-line bg-white"
      aria-hidden="true"
    >
      <div className="flex gap-4 border-b border-line px-4 py-3">
        {Array.from({ length: columns }).map((_, index) => (
          <div
            key={index}
            className={`h-2.5 rounded bg-line/70 ${SHIMMER}`}
            style={{ width: `${100 / columns}%` }}
          />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          className="flex gap-4 border-b border-line px-4 py-3.5 last:border-0"
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div
              key={colIndex}
              className={`h-3 rounded bg-line/70 ${SHIMMER}`}
              style={{
                width: `${100 / columns}%`,
                // Slight variation stops the grid looking like a barcode.
                opacity: 1 - ((rowIndex + colIndex) % 3) * 0.12,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/** A row of KPI cards, matching the dashboard's stat strip. */
export function SkeletonStats({ count = 4 }: { count?: number }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-hidden="true">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="rounded-[14px] border border-line bg-white p-4">
          <div className={`h-2.5 w-20 rounded bg-line/70 ${SHIMMER}`} />
          <div className={`mt-3 h-7 w-24 rounded-md bg-line/70 ${SHIMMER}`} />
          <div className={`mt-2 h-2.5 w-16 rounded bg-line/70 ${SHIMMER}`} />
        </div>
      ))}
    </div>
  );
}

/** A card containing a chart-shaped block. */
export function SkeletonChart({ height = 220 }: { height?: number }) {
  return (
    <div className="rounded-[14px] border border-line bg-white p-4" aria-hidden="true">
      <div className={`h-3 w-32 rounded bg-line/70 ${SHIMMER}`} />
      <div className={`mt-4 rounded-md bg-line/50 ${SHIMMER}`} style={{ height }} />
    </div>
  );
}

/**
 * The default page skeleton.
 *
 * Header, a filter strip, then a table. This is the shape most admin routes
 * take, so it is the fallback for any route without a bespoke skeleton.
 */
export function SkeletonPage({
  rows = 8,
  columns = 5,
  stats = 0,
}: {
  rows?: number;
  columns?: number;
  stats?: number;
}) {
  return (
    <div className="mx-auto max-w-[1100px] space-y-5">
      <SkeletonHeader />
      {stats > 0 ? <SkeletonStats count={stats} /> : null}
      <div className="flex gap-2" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className={`h-8 w-20 rounded-full bg-line/70 ${SHIMMER}`} />
        ))}
      </div>
      <SkeletonTable rows={rows} columns={columns} />
    </div>
  );
}
