import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <main className="page">
      <h1>Dashboard</h1>
      <p>You are signed in as {data.user.email}</p>
    </main>
  )
}

