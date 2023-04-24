import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { BiLogOut } from 'react-icons/bi';
import SideBarTweetButton from "./SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

//Create a const for our Sidebar
const Sidebar = () => {
    const { data: currentUser } = useCurrentUser();
    //create a const for the items in our sidebar
    const items = [
        {
          label: "Home",
          href: "/",
          icon: BsHouseFill
        },
        {
          label: "Notifications",
          href: "/notifications",
          icon: BsBellFill,
          auth: true,
        },
        {
          label: "Profile",
          href: "/users/123",
          icon: FaUser,
          auth: true,
        }
    ];


    return (
        //style sidebar here and add SidebarLogo component
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                <SidebarLogo />
            {items.map((item) => (
              <SidebarItem
                key={item.href}
                href={item.href} 
                icon={item.icon} 
                label={item.label}
                auth={item.auth}
              />
            ))}
            {/* setup currentUser display */}
            {currentUser && <SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />}
            <SideBarTweetButton />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;