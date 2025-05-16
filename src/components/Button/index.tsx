import { useNavigate } from 'react-router';
import './index.css'

interface ButtonProps {
    classButton: string;
    url?: any;
}

export function Button( props : ButtonProps ) {
    const navigate = useNavigate();

    return(
        <button
            className={`${props.classButton} button_default  `}
            onClick={ () => navigate(props.url) }
        >
            See product
        </button>
    )
}