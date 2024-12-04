// "use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { signIn, signOut } from "next-auth/react";
import SignOutButton from "@/components/SignOutButton";
import { getToken } from "next-auth/jwt";

export default async function (req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  console.log(token);
  //   const { data: session, status } = useSession();
  //   console.log(session);
  //   if (!session) {
  //     return (
  //       <>
  //         <h1>NOT LOGGED IN</h1>
  //         <button onClick={  signIn}>Sign In</button>
  //       </>
  //     );
  //   } else
  return (
    <>
      <h1>You are signed in as</h1>
      <SignOutButton />
    </>
  );
}
