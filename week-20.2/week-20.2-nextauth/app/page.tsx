import { getServerSession } from "next-auth";
import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession();

  return JSON.stringify(session);
}
