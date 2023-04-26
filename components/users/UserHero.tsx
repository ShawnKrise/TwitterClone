import Image from "next/image";
import useUser from '@/hooks/useUser';
import Avatar from "../Avatar";

//first establish typescript interface
interface UserHeroProps {
    userId: string;

}

//attach interface components
const UserHero: React.FC<UserHeroProps> = ( {userId} ) => {
    //fetch user
    const {data: fetchedUser} = useUser(userId);

    return (
        <div>
            <div className="bg-neutral-700 h-44 relative">
                {fetchedUser?.coverImage &&(
                    <Image 
                    src={fetchedUser.coverImage} 
                    fill
                    alt="Cover Image"
                    style={{ objectFit: 'cover'}}
                    />
                )}
                {/* note: bottom MINUS 16 */}
                <div className="absolute -bottom-16 left-4">
                    <Avatar userId={userId} isLarge hasBorder/>
                </div>
            </div>
        </div>
    );
}

export default UserHero;