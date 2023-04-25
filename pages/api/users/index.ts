import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    //if req method is not equal to get return response...
    //status 405 and end the call
  if (req.method !== 'GET') {
    return res.status(405).end();
  }  

  //set up try block to fetch users
  try {
    //it's prisma.user since we're working with one user
    const users = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });

    return res.status(200).json(users);
    //catch error and return status 400
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}