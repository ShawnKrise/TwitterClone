import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegister";
import axios from "axios";
import { toast } from 'react-hot-toast';
import { signIn } from "next-auth/react";

const RegisterModal = () => {
    //make const LoginModal equal useLoginModal
    const LoginModal = useLoginModal();
    const registerModal = useRegisterModal();

    //create a const for usestates of email, password, loading
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    //create onToggle to toggle on and off
    const onToggle = useCallback(() => {
        if (isLoading) {
            return; 
        }

        registerModal.onClose();
        LoginModal.onOpen();
        //pass isLoading, registerModal, LoginModal...
        //into dependancy array
    }, [isLoading, registerModal, LoginModal]);

    //make useCallback async for try
    //async lets program start long running task while...
    //still being responsive to other events
    const onSubmit = useCallback(async() => {
        try {
            setIsLoading(true);

    //set up await for axios
        await axios.post('/api/register', {
        email,
        password,
        username,
        name,
        });
        
    //set up toast for successful account creation
        toast.success('Account created.');

    //use signIn to automatically sign in after...
    //account is successfully created
        signIn('credentials', {
            email,
            password,
        });

        //close loginmodal
        registerModal.onClose();
        //if error occurs in our try block...
        //use catch to execute console log of error
        //also display toast error
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        //add another block after catch for finally
        } finally {
            setIsLoading(false);
        }
        //add loginmodal dependancy here
        //added password username and name as well
    }, [registerModal, password, username, name, email]);

    const bodyContent = (
        //style
        <div className="flex flex-col gap-4">
        <Input
          disabled={isLoading}
          placeholder={"Email"}
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          disabled={isLoading}
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <Input 
          disabled={isLoading}
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input 
          disabled={isLoading}
          placeholder="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    )

    const footerContent = (
        //make sure p and span have empty space at start of text
        <div className="text-neutral-400 text-center mt-4">
            <p> Already have an Account? 
                <span
                //pass onToggle here
                onClick={onToggle}
                className="
                    text-white
                    cursor-pointer
                    hover:underline
                "
                > Sign in</span>
            </p>
        </div>
    )

    return (
        <Modal 
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title="Create an account"
        actionLabel="Register"
        onClose={registerModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
        />
    );
}

export default RegisterModal;