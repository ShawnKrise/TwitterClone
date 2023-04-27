import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    //if req method is not equal to get return response...
    //status 405 and end the call
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        const { userId } = req.query;

    //now check to see if user is valid
    //if we don't have user id or type of...
    //user id isn't string throw error invalid id
        if (!userId || typeof userId !== 'string') {
            throw new Error('Invalid ID');
        }
    //now find existing user
    const existingUser = await prisma.user.findUnique({
        where: {
          id: userId
        }
      });

    //load users followers 
    const followersCount = await prisma.user.count({
        where: {
          followingIds: {
            has: userId
          }
        }
      })

    //return respons status
    return res.status(200).json({ ...existingUser, followersCount});
    //catch error and return status 400
    } catch (error) {
        console.log(error);
        return res.status(400).end();
      }
}