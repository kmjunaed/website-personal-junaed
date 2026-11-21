import { Skeleton, SkeletonHeader } from "@/components/admin/skeleton";

/** Media: a toolbar, then a grid of tiles rather than a table. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-[1100px] space-y-5">
      <SkeletonHeader />
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-9 w-40" />
        <Skeleton className="h-9 w-28" />
        <Skeleton className="h-9 w-28" />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <Skeleton key={i} className="aspect-square rounded-[14px]" />
        ))}
      </div>
    </div>
  );
}