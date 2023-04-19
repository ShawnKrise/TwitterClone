import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../input";
import Modal from "../Modal";

const LoginModal = () => {
    //make const LoginModal equal useLoginModal
    const LoginModal = useLoginModal();

    //create a const for usestates of email, password, loading
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <Modal 
        disabled={isLoading}
        isOpen={LoginModal.isOpen}
        title="Login"
        actionLabel="Sign in"
        onClose={LoginModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        />
    );
}

export default LoginModal;