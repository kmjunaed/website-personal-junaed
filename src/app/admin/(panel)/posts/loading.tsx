import { SkeletonPage } from "@/components/admin/skeleton";

/** Posts: filter chips above the post table. */
export default function Loading() {
  return <SkeletonPage rows={8} columns={5} />;
}