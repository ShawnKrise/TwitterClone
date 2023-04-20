import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegister";

const LoginModal = () => {
    //make const LoginModal equal useLoginModal
    const LoginModal = useLoginModal();
    const registerModal = useRegisterModal();

    //create a const for usestates of email, password, loading
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    //create onToggle to toggle on and off
    const onToggle = useCallback(() => {
        if (isLoading) {
            return; 
        }

        LoginModal.onClose();
        registerModal.onOpen();
        //pass isLoading, registerModal, LoginModal...
        //into dependancy array
    }, [isLoading, registerModal, LoginModal]);


    //make useCallback async for try
    //async lets program start long running task while...
    //still being responsive to other events
    const onSubmit = useCallback(async() => {
        try {
            setIsLoading(true);

        //ADD LOGIN HERE LATER
        
        //close loginmodal
        LoginModal.onClose();
        //if error occurs in our try block...
        //use catch to execute console log of error
        } catch (error) {
            console.log(error);
        //add another block after catch for finally
        } finally {
            setIsLoading(false);
        }
        //add loginmodal dependancy here
    }, [LoginModal]);

    const bodyContent = (
        //style
        <div className="flex flex-col gap-4">
            {/* inputs */}
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />

        </div>
    )

    const footerContent = (
        //make sure p and span have empty space at start of text
        <div className="text-neutral-400 text-center mt-4">
            <p> First time using Twitter? 
                <span
                //pass onToggle here
                onClick={onToggle}
                className="
                    text-white
                    cursor-pointer
                    hover:underline
                "
                > Create an account</span>
            </p>
        </div>
    )

    return (
        <Modal 
        disabled={isLoading}
        isOpen={LoginModal.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={LoginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
        />
    );
}

export default LoginModal;