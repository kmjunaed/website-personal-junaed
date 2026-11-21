import { SkeletonPage } from "@/components/admin/skeleton";

/** Portfolio: the project table. */
export default function Loading() {
  return <SkeletonPage rows={6} columns={5} />;
}