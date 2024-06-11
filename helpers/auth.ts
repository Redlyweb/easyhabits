import { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./prisma";

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.ClientID!,
            clientSecret: process.env.ClientSecret!,
        })
    ],
    callbacks: {
      session({ session, user }) {
        if (session.user) {
          session.user.id = user.id;
        }
        return session;
      },
    },
    adapter: PrismaAdapter(prisma),
}