import CredentialsProvider from "next-auth/providers/credentials";

import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "aman.ver9345@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        const user = {
          email: "aman.ver9345@gmail.com",
          id: "1",
          name: "aman",
        };

        if (user) {
          return user;
        } else {
          return null;
        } 
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
