import bcrypt from 'bcrypt';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from "@/libs/prismadb";

export default NextAuth({
    //first export prisma adapter
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
           name: "credentials",
           credentials: {
            email: { label: 'email', type: 'text' },
            password: { label: 'password', type: 'password' },
           },
           async authorize(credentials) {
            //if credentials don't have password throw error.
            if (!credentials?.email || !credentials?.password) {
                throw new Error('Invalid credentials');
              }
      
              //use credential email to find existing user
              const user = await prisma.user.findUnique({
                where: {
                  email: credentials.email
                }
              });
              //if user does not exist or user doesn't have...
              //hashed password throw error
              if (!user || !user?.hashedPassword) {
                throw new Error('Invalid credentials');
              }
              
              //now we check to see if password is correct
              //compare credentials
              const isCorrectPassword = await bcrypt.compare(
                credentials.password,
                user.hashedPassword
              );
             //if not the correct password throw error
              if (!isCorrectPassword) {
                throw new Error('Invalid credentials');
              }

              return user;
           }
        })
    ],
    //turn on debug to help solve issues through terminal
    debug: process.env.NODE_ENV === 'development',
    session: {
        //strategy is jwt, aka JSON web token which uses secret
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
});