import { SkeletonPage } from "@/components/admin/skeleton";

/** Activity: filter bar above a log table. */
export default function Loading() {
  return <SkeletonPage rows={10} columns={5} />;
}