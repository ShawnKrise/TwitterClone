import { IconType } from "react-icons";

//create interface, make onClick optional
interface SidebarItemProps {
    label: string;
    href: string;
    icon: IconType
    onClick?: () => void;
}

//put SidebarItem into react functional component
const SidebarItem: React.FC<SidebarItemProps> = ({
    //for icon use : Icon to let us use as a component later
    label,
    href,
    icon: Icon,
    onClick
}) => {
    return (
        //style div
        //Icons show up when screen is collapsed/mobile
        //Once mobile is established, make desktop div
        <div className="flex flex-row items-center">
            <div
                className="
                relative
                rounded-full
                h-14
                w-14
                flex
                items-center
                justify-center
                p-4
                hover:bg-slate-300
                hover:bg-opacity-10
                cursor-pointer
                lg:hidden
                "
                >
                 <Icon  size={28} color="white"/>
            </div>
            <div
                className="
                relative
                hidden
                lg:flex
                gap-4
                p-4
                rounded-full
                hover:bg-slate-300
                hover:bg-opacity-10
                cursor-pointer
                items-center
            "
            >
            {/* Added Desktop Icons with labels */}
                <Icon  size={24} color="white"/>
                <p className="hidden lg:block text-white text-xl ">
                    {label}
                </p>
            </div>
        </div>
    );
}

export default SidebarItem;