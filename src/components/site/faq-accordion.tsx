"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/lib/faq";

/**
 * FAQ accordion.
 *
 * Built on native <details>/<summary> rather than a div with a click handler:
 * it opens without JS, it is keyboard-operable for free, and the browser gives
 * it the right semantics for screen readers. The React state exists only to
 * keep one panel open at a time and to drive the plus/minus icon.
 *
 * The panel animates with a grid-rows trick (0fr → 1fr) so the height is
 * measured by the browser instead of hardcoded, and it is disabled under
 * prefers-reduced-motion.
 */

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="relative grid size-8 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-700 transition-colors group-open:bg-violet-600 group-open:text-white"
    >
      <span className="absolute h-[1.5px] w-3 rounded-full bg-current" />
      <span
        className={`absolute h-3 w-[1.5px] rounded-full bg-current transition-transform duration-200 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <li key={item.question}>
            <details
              open={open}
              className="group rounded-[15px] border border-line bg-white transition-colors open:border-violet-200"
              onToggle={(event) => {
                // <details> fires onToggle for programmatic changes too, so
                // read the element's own state rather than toggling blindly.
                const isOpen = (event.currentTarget as HTMLDetailsElement).open;
                setOpenIndex((current) => {
                  if (isOpen) return index;
                  return current === index ? null : current;
                });
              }}
            >
              <summary
                aria-controls={panelId}
                className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-[14.5px] font-bold leading-[1.4] text-ink marker:content-none [&::-webkit-details-marker]:hidden"
              >
                <span>{item.question}</span>
                <PlusMinus open={open} />
              </summary>

              <div
                id={panelId}
                className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-250 ease-out group-open:grid-rows-[1fr] motion-reduce:transition-none"
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-[14px] leading-[1.65] text-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
            </details>
          </li>
        );
      })}
    </ul>
  );
}
