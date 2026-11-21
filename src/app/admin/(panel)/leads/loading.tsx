import { SkeletonPage } from "@/components/admin/skeleton";

/** Leads: filter chips above a table of enquiries. */
export default function Loading() {
  return <SkeletonPage rows={8} columns={5} />;
}