import { create } from "zustand";

//Set up interface for LoginModalStore.
//OnOpen and OnClose should be a type of function
interface LoginModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

//create a hook to control login modal
const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
  }));

  export default useLoginModal;