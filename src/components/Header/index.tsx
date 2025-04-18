import { FiShoppingCart } from 'react-icons/fi'
import logoImg from '/assets/shared/desktop/logo.svg'
import './index.css'
import { Link, useLocation } from 'react-router'
import style from '../root.module.css'
import ImgEarphones from '/assets/shared/desktop/image-category-thumbnail-earphones.png'
import ImgHeadphones from '/assets/shared/desktop/image-category-thumbnail-headphones.png'
import ImgSpeakers from '/assets/shared/desktop/image-category-thumbnail-speakers.png'
import { ButtonShop } from '../buttonShop'
import { useEffect, useRef, useState } from 'react'

export function Header() {
    const location = useLocation()
    const bgRef = useRef<HTMLDivElement | null >(null)
    const burgerRef = useRef<HTMLButtonElement | null>(null)
    const [menuActive, setMenuActive] = useState(false)

    const body = document.body

    useEffect(() => {
        if (menuActive) {
            bgRef.current?.classList.toggle('active_button')
            burgerRef.current?.classList.toggle('on')
            setMenuActive(false)
        } 

        body.style.overflow = 'auto'
    }, [location])


    function activeButton() {
        bgRef.current?.classList.toggle('active_button')
        burgerRef.current?.classList.toggle('on')

        if (bgRef.current?.classList.contains('active_button')) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'auto'
        }

        setMenuActive(true)
    }

    return(
        <header className='w-full h-[90px] flex items-center justify-center'>
            <nav className='flex items-center justify-between w-full h-full'>
                <div className="left_content w-[65%] flex items-center justify-between md:justify-start gap-[42px] lg:w-auto">
                    <button ref={burgerRef} className="burger cursor-pointer lg:hidden"  id='burger' onClick={activeButton} >
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

                <div className="bg_menu w-full fixed" ref={bgRef} id='bg_menu'>
                    <ul className="menu_mobile bg-white w-full flex items-center justify-center flex-col gap-[56px] sm:flex-row sm:gap-[10px] lg:hidden">
                        <li className='nav_list w-[90%] h-[165px] flex flex-col items-center justify-end gap-[17px] relative rounded-[8px] ' >
                            <img src={ImgHeadphones} alt="" className='absolute'/>
                            <h2 className={`${style['text-present-7']}`} >Headphones</h2>
                            <ButtonShop url="/category/headphones"/>
                        </li>
                        <li className='nav_list w-[90%] h-[165px] flex flex-col items-center justify-end gap-[17px] relative rounded-[8px] ' >
                            <img src={ImgSpeakers} alt="" className='absolute'/>
                            <h2 className={`${style['text-present-7']}`} >Speakers</h2>
                            <ButtonShop url="/category/speakers" />
                        </li>
                        <li className='nav_list w-[90%] h-[165px] flex flex-col items-center justify-end gap-[17px] relative rounded-[8px] ' >
                            <img src={ImgEarphones} alt="" className='absolute'/>
                            <h2 className={`${style['text-present-7']}`} >Earphones</h2>
                            <ButtonShop url="/category/earphones" />
                        </li>
                    </ul>
                </div>
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