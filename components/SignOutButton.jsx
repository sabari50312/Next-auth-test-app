"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function SignOutButton() {
  const { data: session } = useSession();

  console.log("BUTTON", session);
  return <button onClick={signOut}>Sign Out as {session.user.name}</button>;
}
