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
            className={`${props.classButton} w-[160px] h-[48px] border-0 bg-transparent uppercase font-manrope text-[13px] font-bold tracking-[1px] transition-all duration-[.3s] ease-in-out cursor-pointer `}
            onClick={ () => navigate(props.url) }
        >
            See product
        </button>
    )
}