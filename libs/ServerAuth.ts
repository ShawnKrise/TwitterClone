import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/libs/prismadb';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  //if we don't have a session user email throw...
    //not signed in error
  if (!session?.user?.email) {
    throw new Error('Not signed in');
  } 

  //if we do have a current user
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    }
  });

  if (!currentUser) {
    throw new Error('Not signed in');
  }

  //finally return currentUser for use
  return { currentUser };
};

export default serverAuth;