import './index.css'

interface ButtonProps {
    classButton: string;
}

export function Button( props : ButtonProps ) {
    return(
        <button
            className={props.classButton}
        >
            See product
        </button>
    )
}