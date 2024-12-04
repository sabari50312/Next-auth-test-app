import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        // Replace this with your own user authentication logic
        const user = { id: 1, name: "John Doe the ADMIN", username: "johndoe" };

        if (username === "admin" && password === "password123") {
          return user; // Successful authentication
        }
        return null; // Authentication failed
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom sign-in page (optional)
  },
  session: {
    strategy: "jwt", // JWT is the default and recommended for Credentials
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
