import { SkeletonPage } from "@/components/admin/skeleton";

/** Staff: account table with per-row controls. */
export default function Loading() {
  return <SkeletonPage rows={5} columns={5} />;
}