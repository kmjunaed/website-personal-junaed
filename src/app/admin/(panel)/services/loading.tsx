import { SkeletonPage } from "@/components/admin/skeleton";

/** Services: the service table. */
export default function Loading() {
  return <SkeletonPage rows={6} columns={4} />;
}