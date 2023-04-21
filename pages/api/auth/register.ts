import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    //if req method isn't equal to post return 405 and end call
    if (req.method !== 'POST') {
    return res.status(405).end();
  }

  //create try and catch blocks
  try {
    const { email, username, name, password } = req.body;

    //hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    //create user
    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        hashedPassword,
      }
    });

    return res.status(200).json(user);
    //catch console logs error
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}