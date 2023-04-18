
//add interface for props
interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const input = () => {
    return (
        <div></div>
    );
}

export default input;