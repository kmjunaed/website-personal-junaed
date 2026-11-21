import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { getAdminBase } from "@/lib/admin-path";

/**
 * Admin host root.
 *
 * The proxy rewrites `admin.host/` to `/admin`, so this is the entry point.
 * Send signed-in users to the dashboard and everyone else to the login screen.
 * No content is rendered here, so there is nothing to index even if the
 * header layer were ever misconfigured.
 */
export default async function AdminIndexPage() {
  const session = await getSession();
  const base = await getAdminBase();
  redirect(session ? `${base}/dashboard` : `${base}/login`);
}
