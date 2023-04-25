import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import { useCallback } from "react";
import Image from "next/image";

//setup AvatarProps interface
//is large and hasborder are optional
interface AvatarProps {
    userId: string;
    isLarge?: boolean;
    hasBorder?: boolean;
}

//assign props to Avatar
const Avatar: React.FC<AvatarProps> = ({
    userId, isLarge, hasBorder
}) => {
    //setup useRouter for routing
    const router = useRouter();

    //fetch data using useUser hook
    const { data: fetchedUser } = useUser(userId);

    //add onclick handle 
    const onClick = useCallback((event: any) => {
    //add stoppropagation to override onclick
    event.stopPropagation();

    const url = `/users/${userId}`;
    
    //push url
    router.push(url);
    //dependancy array
  }, [router, userId]);

    return (
        //style div for large and mobile screens
        <div className={`
          ${hasBorder ? 'border-4 border-black' : ''}
          ${isLarge ? 'h-32' : 'h-12'}
          ${isLarge ? 'w-32' : 'w-12'}
          rounded-full
          hover:opacity-90
          transition
          cursor-pointer
          relative
          `}
          >
            <Image
              fill
              style={{
              objectFit: 'cover',
              borderRadius: '100%'
              }}
              alt="Avatar"
              onClick={onClick}
              //fetch user profile image or put placeholder image
              src={fetchedUser?.profileImage || '/images/placeholder.png'}
            />
        </div>
    );
}

export default Avatar;