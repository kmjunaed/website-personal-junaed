import { Skeleton, SkeletonHeader, SkeletonTable } from "@/components/admin/skeleton";

/** Scripts: the snippet table with enable/rollback controls. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-[1100px] space-y-5">
      <SkeletonHeader />
      <Skeleton className="h-10 rounded-[14px]" />
      <SkeletonTable rows={5} columns={5} />
    </div>
  );
}