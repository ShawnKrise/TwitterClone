import { useCallback } from "react";


//setup interface for modal props
//Several are optional
interface ModalProps { 
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;

}

//assign props to Modal 
const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled
}) => {
    const handleClose = useCallback(() => {
        //check if button is disabled. If so return.
        if(disabled) {
            return;
        }
        //otherwise call onClose from props
        onClose();
        //add props to dependancy array
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        //check if button is disabled. If so return.
        if(disabled) {
            return;
        }
        //otherwise call onSubmit from props
        onSubmit();
        //add props to dependancy array
    }, [disabled, onSubmit]);

    //if not open, return null
    if (!isOpen) {
        return null;
    }

    return (
        <>
        <div
        className="
            justify-center
            items-center
            flex
            overflow-x-hidden
            overflow-y-auto
            fixed
            inset-0
            z-50
            outline-none
            focus:outline-none
            bg-neutral-800
            bg-opacity-70
        "
        >
        {/* add a div that makes it web responsive */}
            <div
            className="
              relative
              w-full
              lg:w-3/6
              my-6
              mx-auto
              lg:max-w-3xl
              h-full
              lg:h-auto
            "
            >
            {/* Content */}
                <div
                className="
                    h-full
                    lg:h-auto
                    border-0
                    rounded-lg
                    shadow-lg
                    relative
                    flex
                    flex-col
                    w-full
                    bg-black
                    outline-none
                    focus:outline-none
                "
                >
            {/* Header */}
                    <div
                    className="
                    flex
                    items-center
                    justify-between
                    p-10
                    rounded-t
                    "
                    >
                    <h3 
                    className="
                    text-3xl 
                    font-semibold 
                    text-white">
                        {title}
                    </h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Modal;