import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

//create a const for our SidebarLogo
const SidebarLogo = () => {
    //create a const for our router
    const router = useRouter();

    return (
        //create styling and add twitter icon
        <div className="
          rounded-full
          h-14
          w-14
          p-4
          flex
          items-center
          justify-center
          hover: bg-blue-300
          hover: bg-opacity-10
          cursor-pointer
          transition
        ">
            <BsTwitter size={28} color="white" />
        </div>
    );
}

export default SidebarLogo;