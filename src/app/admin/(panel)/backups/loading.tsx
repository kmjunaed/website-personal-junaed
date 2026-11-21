import { Skeleton, SkeletonHeader, SkeletonTable } from "@/components/admin/skeleton";

/** Backups: status banner, run button, then the run history. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-[1000px] space-y-5">
      <SkeletonHeader />
      <Skeleton className="h-12 rounded-[14px]" />
      <div className="rounded-[14px] border border-line bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-3 w-40" />
          <Skeleton className="h-9 w-36" />
        </div>
      </div>
      <SkeletonTable rows={4} columns={5} />
    </div>
  );
}