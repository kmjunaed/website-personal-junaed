import { Skeleton, SkeletonHeader, SkeletonTable } from "@/components/admin/skeleton";

/** SEO: redirects table plus the 404 log. */
export default function Loading() {
  return (
    <div className="mx-auto max-w-[1100px] space-y-5">
      <SkeletonHeader />
      <div className="flex gap-2">
        <Skeleton className="h-9 w-32" />
        <Skeleton className="h-9 w-32" />
      </div>
      <SkeletonTable rows={7} columns={4} />
    </div>
  );
}