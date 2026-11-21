import { Skeleton, SkeletonHeader } from "@/components/admin/skeleton";

/** Alerts: a stack of alert cards, not a table. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-[900px] space-y-5">
      <SkeletonHeader />
      <div className="space-y-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-[14px] border border-line bg-white p-4">
            <div className="flex items-start gap-3">
              <Skeleton className="size-8 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-2/3" />
                <Skeleton className="h-2.5 w-24" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}