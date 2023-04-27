import { format } from 'date-fns'
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useMemo } from 'react';
import Button from '../Button';
import { BiCalendar } from 'react-icons/bi';


//setup interface
interface UserBioProps {
    userId: string;

}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
    //fetch current user
    const { data: currentUser } = useCurrentUser();
    //pass in userId for useUser
    const { data: fetchedUser} = useUser(userId);
    //useMemo is from react
    const createdAt = useMemo(() => {
    //if there is no fetched user at created at return null    
        if (!fetchedUser?.createdAt) {
            return null;
        }
    //otherwise return format new Date
    return format(new Date(fetchedUser.createdAt), 'MMMM yyyy');
    //put dependancy array here
}, [fetchedUser?.createdAt])

    return (
        //setup div for container styling
        <div className='border-b-[1px] border-neutral-800 pb-4'>
            <div className='flex justify-end p-2'>
            {/* Now check for own profile page or alt page */}
             {currentUser?.id === userId ? (
                //display edit button for own profile
                <Button secondary label="Edit" onClick={() => {}}/>
             ) : (
                //or display follow button for other profile
                <Button 
                    onClick={() => {}}
                    label="Follow"
                    secondary
                />
             )}
            </div>
            <div className='mt-8 px-4'>
                <div className='flex flex-col'>
                   <p className='text-white text-2xl font-semibold'>
                        {fetchedUser?.name}
                    </p> 
                    <p className='text-md text-neutral-500'>
                        @{fetchedUser?.username}
                    </p>
                </div>
                <div className='flex flex-col mt-4'>
                    <p className='text-white'>
                        {fetchedUser?.bio}
                    </p>
                    <div
                    className='
                        flex
                        flex-row
                        items-center
                        gap-2
                        mt-4
                        text-neutral-500
                    '
                    >
                        <BiCalendar size={24} />
                        <p>
                           Joined {createdAt} 
                        </p>
                    </div>
                </div>
                <div 
                className='
                flex 
                flex-row 
                items-center
                mt-4
                gap-6
                '
                >
                    <div className='flex flex-row items-center gap-1'>
                        <p className='text-white'>
                            {fetchedUser?.followingIds?.length}
                        </p>
                        <p className='text-neutral-500'>
                            Following
                        </p>
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        <p className='text-white'>
                            {fetchedUser?.followerCount || 0}
                        </p>
                        <p className='text-neutral-500'>
                            Followers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default UserBio;