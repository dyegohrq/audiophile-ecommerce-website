import { FaAngleRight } from 'react-icons/fa'
import { useNavigate } from 'react-router';

interface ButtonShopProps {
    url: string;
}

export function ButtonShop( props : ButtonShopProps ) {
    const navigate = useNavigate()

    function navigatePage(url: string) {
        navigate(url)
    }

    return(
        <button
            className=" text-White-300 font-manrope font-bold text-[13px] tracking-[1px] uppercase flex items-center justify-between w-[58px] h-[48px] bg-transparent border-0 cursor-pointer transition-all duration-[.3s] ease-in-out hover:text-Orange-900 "
            onClick={ () => navigatePage(props.url) }
        >
            Shop
            <FaAngleRight color='#d87d4a' />
        </button>
    )
}