import ServerAuth from "@/libs/ServerAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    //limit req metho to get only
    if (req.method !== 'GET') {
        return res.status(405).end();
    }
    //setup try and catch blocks
    try {
        const { currentUser } = await ServerAuth(req);

        return res.status(200).json(currentUser);

    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}