import useUsers from "@/hooks/useUsers";
import Avatar from "../Avatar";


const FollowBar = () => {
    //setup const for use users
    const { data: users = [] } = useUsers();

    //if there are no users on the site display nothing
    if (users.length === 0) {
        return null;
    }

    return (
        //block for large screens
        <div className="px-6 py-4 hidden lg:block">
            <div className="bg-neutral-800 rounded-xl p-4">
                <h2 className="text-white text-xl font-semibold"> Who to follow</h2>
                <div className="flex flex-col gap-6 mt-4">
                    {/* setup users map */}
                    {users.map((user: Record<string, any>) => (
                        <div key={user.id} className="flex flex-row gap-4">
                            {/* add user avatar here */}
                            <Avatar userId={user.id}/>
                            {/* add text info that goes with avatar */}
                            <div className=" flex flex-col">
                                <p className="
                                text-white
                                font-semibold
                                font-sm
                                ">
                                 {user.name}
                                </p>
                                <p className="text-neutral-400 text-sm">
                                @{user.username}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FollowBar;