import { FiShoppingCart } from 'react-icons/fi'
import logoImg from '../../../public/assets/shared/desktop/logo.svg'
import './index.css'
import { Link } from 'react-router'
import style from '../root.module.css'

export function Header() {
    return(
        <header className='w-full h-[90px] flex items-center justify-center' >
            <nav className='flex items-center justify-around w-full max-w-[1110px] h-full'>
                <div className="left_content w-[55%] flex items-center justify-between md:justify-start gap-[42px] lg:w-auto">
                    <button className="burger cursor-pointer lg:hidden" >
                        <div className="hambuguer">
                            <div className="bar" id="bar1"></div>
                            <div className="bar" id="bar2"></div>
                            <div className="bar" id="bar3"></div>
                        </div>
                    </button>
                    <div className="logo">
                        <Link to={'/'} ><img src={logoImg} alt="" /></Link>
                    </div>
                </div>
                <FiShoppingCart size={20} color='#fff' className='icon order-2 cursor-pointer'/>

                <ul className="menu_mobile absolute bg-white w-full h-full lg:hidden">
                    Home
                    Headphones
                    Speakers
                    Earphones
                </ul>
                <ul className={ `${style.subtitle} menu_descktop hidden order-1 gap-[34px] text-white lg:flex` }>
                    <li className="list_item">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className="list_item">
                        <Link to={'/'}>Headphones</Link>
                    </li>
                    <li className="list_item">
                        <Link to={'/'}>Speakers</Link>
                    </li>
                    <li className="list_item">
                        <Link to={'/'}>Earphones</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}