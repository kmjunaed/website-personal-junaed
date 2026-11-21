import { SkeletonChart, SkeletonStats, SkeletonHeader, Skeleton } from "@/components/admin/skeleton";

/** Dashboard: stat strip, then the daily-series chart, then two lists. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-[1100px] space-y-5">
      <SkeletonHeader />
      <SkeletonStats count={4} />
      <SkeletonChart height={240} />
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-[14px] border border-line bg-white p-4">
          <Skeleton className="h-3 w-28" />
          <div className="mt-4 space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="size-8 rounded-full" />
                <Skeleton className="h-3 flex-1" />
                <Skeleton className="h-3 w-12" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[14px] border border-line bg-white p-4">
          <Skeleton className="h-3 w-28" />
          <div className="mt-4 space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="size-8 rounded-full" />
                <Skeleton className="h-3 flex-1" />
                <Skeleton className="h-3 w-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}