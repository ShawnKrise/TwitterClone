import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";

//Create a const for our Sidebar
const Sidebar = () => {
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
          icon: BsBellFill
        },
        {
          label: "Profile",
          href: "/users/123",
          icon: FaUser
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
              />
            ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;