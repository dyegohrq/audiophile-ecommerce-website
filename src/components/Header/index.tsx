import { FiShoppingCart } from 'react-icons/fi'
import logoImg from '../../../public/assets/shared/desktop/logo.svg'
import './index.css'

export function Header() {
    return(
        <header className='w-full h-[90px] flex items-center justify-center' >
            <nav className='flex items-center justify-around w-full'>
                <button className="burger" >
                    <div className="hambuguer">
                        <div className="bar" id="bar1"></div>
                        <div className="bar" id="bar2"></div>
                        <div className="bar" id="bar3"></div>
                    </div>
                </button>
                <div className="logo">
                    <img src={logoImg} alt="" />
                </div>
                <FiShoppingCart size={20} color='#fff' />

                <ul className="menu_mobile hidden">
                    Home
                    Headphones
                    Speakers
                    Earphones
                </ul>
                <ul className="menu_descktop hidden">
                    Home
                    Headphones
                    Speakers
                    Earphones
                </ul>
            </nav>
        </header>
    )
}