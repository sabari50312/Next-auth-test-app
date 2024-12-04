import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  // Retrieve the token from cookies
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If no token and path is not public, redirect to sign-in
  if (!token) {
    // console.log(token);
    return NextResponse.redirect(new URL("api/auth/signin", req.url));
  }

  //   console.log(token);

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico|api/auth).*)"], // Protect all routes except public assets and API auth routes
};
