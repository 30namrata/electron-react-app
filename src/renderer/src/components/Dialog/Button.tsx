

interface ButtonProps {
    label: string
    variant?: 'primary' | 'secondary' | 'danger' | 'outline'
    onClick: () => void
}

const Button = ({ label, variant = 'primary', onClick }: ButtonProps) => {
    const styles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",

    };


    return (
        <button
            onClick={onClick}
            className={`px-4 py-1 rounded-md text-md transition ${styles[variant]}`}
        >
            {label}
        </button>
    );
}

export default Button
