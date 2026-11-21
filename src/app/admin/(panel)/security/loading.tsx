import { Skeleton, SkeletonHeader, SkeletonTable } from "@/components/admin/skeleton";

/** Security: the add-block form, then the block list. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-[1000px] space-y-5">
      <SkeletonHeader />
      <div className="rounded-[14px] border border-line bg-white p-4">
        <Skeleton className="h-3 w-32" />
        <div className="mt-3 flex flex-wrap gap-2">
          <Skeleton className="h-9 flex-1" />
          <Skeleton className="h-9 w-36" />
          <Skeleton className="h-9 w-28" />
        </div>
      </div>
      <SkeletonTable rows={4} columns={5} />
    </div>
  );
}