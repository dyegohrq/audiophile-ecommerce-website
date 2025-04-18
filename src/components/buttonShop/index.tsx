import { FaAngleRight } from 'react-icons/fa'
import './index.css'
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
            className="buttonShop"
            onClick={ () => navigatePage(props.url) }
        >
            Shop
            <FaAngleRight color='#d87d4a' />
        </button>
    )
}