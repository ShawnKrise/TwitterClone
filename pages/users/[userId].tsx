import Header from "@/components/Header";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";


//UserView fixes 404 error when profile avatar...
//is clicked in sidebar
const UserView = () => {
    //fetch router for routing
    const router = useRouter();
    //fetch user for data
    const { userId } = router.query;
    //fetch useUser hook and pass it as a string
    const { data: fetchedUser, isLoading } = useUser(userId as string);
    
    //if loading or there is no fetched user, return
    //Looks like this - isLoading || !fetchedUser
    //to test set to true or false instead
    if (false) {
        return (
            <div
            className="
                flex
                justify-center
                items-center
                h-full
            "
            >
            {/* add cliploader from react-spinners */}
                <ClipLoader color="lightblue" size={80}/>
            </div>
        )
    }

    return (
        <>
        {/* add header here plus show back arrow */}
            <Header showBackArrow label={fetchedUser?.name}/>
            <UserHero userId={userId as string} />
            <UserBio  userId={userId as string} />
        </>
    );
}

export default UserView;