import { create } from "zustand";

//note zustand is a sate management library like redux
//zustand makes it easy to control global state
//Set up interface for RegisterModalStore.
//OnOpen and OnClose should be a type of function
interface RegisterModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

//create a hook to control login modal
const useRegisterModal = create<RegisterModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }));

  export default useRegisterModal;