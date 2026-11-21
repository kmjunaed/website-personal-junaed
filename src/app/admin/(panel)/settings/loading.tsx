import { Skeleton, SkeletonHeader } from "@/components/admin/skeleton";

/** Settings: tabbed groups of labelled fields. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-[900px] space-y-5">
      <SkeletonHeader />
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-24 rounded-full" />
        ))}
      </div>
      <div className="space-y-4 rounded-[14px] border border-line bg-white p-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-2.5 w-28" />
            <Skeleton className="h-10 rounded-[10px]" />
          </div>
        ))}
      </div>
    </div>
  );
}