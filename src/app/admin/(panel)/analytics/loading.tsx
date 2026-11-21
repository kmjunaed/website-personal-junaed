import { Skeleton, SkeletonChart, SkeletonHeader, SkeletonStats } from "@/components/admin/skeleton";

/** Analytics: KPI strip, series chart, then breakdown tables. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-[1100px] space-y-5">
      <SkeletonHeader />
      <SkeletonStats count={4} />
      <SkeletonChart height={260} />
      <div className="grid gap-4 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-[14px] border border-line bg-white p-4">
            <Skeleton className="h-3 w-24" />
            <div className="mt-4 space-y-2.5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Skeleton key={j} className="h-3" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}