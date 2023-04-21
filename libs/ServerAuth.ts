import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";

import prisma from '@/libs/prismadb';

const ServerAuth = async (req: NextApiRequest) => {
    const session = await getSession({ req });

    //if we don't have a session user email throw...
    //not signed in error
    if (!session?.user?.email) {
       throw new Error('Not signed in') 
    }
    //if we do have a current user
    const currentUser = await prisma.user.findUnique({
        where: {
           email: session.user.email 
        }
    });

    if (!currentUser) {
        throw new Error('Not signed in');
    }

    return {currentUser};
};

export default ServerAuth;