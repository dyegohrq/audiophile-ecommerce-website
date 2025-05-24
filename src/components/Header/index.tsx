import { FiShoppingCart } from 'react-icons/fi'
import logoImg from '/assets/shared/desktop/logo.svg'
import './index.css'
import { Link, useLocation } from 'react-router'
import style from '../root.module.css'
import ImgEarphones from '/assets/shared/desktop/image-category-thumbnail-earphones.png'
import ImgHeadphones from '/assets/shared/desktop/image-category-thumbnail-headphones.png'
import ImgSpeakers from '/assets/shared/desktop/image-category-thumbnail-speakers.png'
import { ButtonShop } from '../buttonShop'
import { useContext, useEffect, useRef, useState } from 'react'
import { productContext } from '../../context/Context'
import { Container } from '../container/Container'

export function Header() {
    const location = useLocation()
    const bgRef = useRef<HTMLDivElement | null >(null)
    const burgerRef = useRef<HTMLButtonElement | null>(null)
    const cart = useRef<HTMLDivElement | null>(null)
    const [menuActive, setMenuActive] = useState(false)
    const { 
        product, 
        incrementAmount, 
        decrementAmount, 
        getAmountByProduct, 
        calculateTotal, 
        removeAll 
    } = useContext(productContext)

    const body = document.body

    useEffect(() => {
        if (menuActive) {
            bgRef.current?.classList.toggle('active_button')
            burgerRef.current?.classList.toggle('on')
            setMenuActive(false)
        } 

        body.style.overflow = 'auto'
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    }, [location])


    function activeButton() {
        bgRef.current?.classList.toggle('active_button')
        burgerRef.current?.classList.toggle('on')

        if (bgRef.current?.classList.contains('active_button')) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'auto'
        }

        if (cart.current?.classList.contains('activeCart')) {
            cart.current.classList.toggle('activeCart')
        }

        setMenuActive(true)
    }

    function activeCart() {
        cart.current?.classList.toggle('activeCart')

        if (cart.current?.classList.contains('activeCart')) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'auto'
        }

        if (bgRef.current?.classList.contains('active_button')) {
            bgRef.current.classList.toggle('active_button')
            burgerRef.current?.classList.toggle('on')
        }
    }

    return(
        <header className='w-full h-[90px] flex items-center justify-center bg-transparent absolute top-[0px] '>
            <Container>
                <nav className='flex items-center justify-between w-full h-full lg:border-b-[1px] lg:border-solid lg:border-b-White pt-[36px] pb-[36px] '>
                <div className="left_content w-[65%] flex items-center justify-between md:justify-start gap-[42px] lg:w-auto">
                    <button ref={burgerRef} className="burger cursor-pointer w-[16px] h-[16px] lg:hidden"  id='burger' onClick={activeButton} >
                        <div className="hambuguer w-full h-full flex flex-col gap-[3px] ">
                            <div className="bar w-full h-[3px] bg-White transition-all ease-in-out duration-[.3s] " id="bar1"></div>
                            <div className="bar w-full h-[3px] bg-White transition-all ease-in-out duration-[.3s] " id="bar2"></div>
                            <div className="bar w-full h-[3px] bg-White transition-all ease-in-out duration-[.3s] " id="bar3"></div>
                        </div>
                    </button>
                    <div className="logo">
                        <Link to={'/'} ><img src={logoImg} alt="" /></Link>
                    </div>
                </div>
                <button
                    className=' flex w-auto order-2 cursor-pointer'
                    onClick={ () => activeCart() }
                >
                    <FiShoppingCart size={20} className='icon text-White hover:text-Orange-900 transition-all ease-in-out duration-[.3s] '/>
                </button>

                <div ref={cart} id='cart' className='absolute flex-col items-center justify-start hidden' >
                    <div className='absolute right-[5%] lg:right-[10%] bg-white w-[90%] md:max-w-[450px] mt-[24px] rounded-[8px] py-[32px] px-[28px] ' >
                        <div className='flex justify-between mb-[30px] ' >
                            <h3 className={ ` ${style['text-present-6']} ` } >Cart ( {product.length} ) </h3>
                            <button onClick={removeAll} className={ `remove  ${style['text-present-7']} border-b  cursor-pointer` } >Remove all</button>
                        </div>
                        <ul className=' flex flex-col gap-[24px] mb-[32px] ' >
                            {
                                product.map((item) => (
                                    <li key={item.id} className='flex gap-[16px] flex-row items-center justify-between ' >
                                        <div className=' max-w-[64px] max-h-[64px] overflow-hidden rounded-[8px]  ' >
                                            <img src={item.categoryImage.mobile.replace("./assets/", "/assets/")} alt={item.slug} />
                                        </div>
                                        <div className=' w-[105px] ' >
                                            <h3 className={`${style['text-present-7']}`} > {
                                                item.name.replace('Headphones', '')
                                                .replace('Wireless Earphones', '')
                                            } </h3>
                                            <span className='number' > {item.price.toLocaleString('en-US', {
                                                style: 'currency',
                                                currency: 'USD'
                                            })} </span>
                                        </div>
                                        <div className=' py-[7px] px-[10px] button w-[96px] flex justify-between items-center ' >
                                            <button 
                                               onClick={() => decrementAmount(item, true)}
                                               className='buttonAmount cursor-pointer'
                                            > - </button>

                                                <span 
                                                    className={style.subtitle} 
                                                >{getAmountByProduct(item)}</span>

                                            <button 
                                                className='buttonAmount cursor-pointer' 
                                                onClick={ () => incrementAmount(item) }
                                            >+</button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='w-full flex justify-between ' >
                            <span className={`${style['text-present-7']} uppercase text-White-300`} >Total</span>
                            <span className={style['text-present-6']}>
                                {
                                    calculateTotal().toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD'
                                    })
                                }
                            </span>
                        </div>
                        <Link to={'/checkout'} className={`${style.subtitle} w-full flex mt-[24px] py-[15px] items-center justify-center text-white bg-Orange-900 transition-all duration-[.3s] ease-in-out hover:bg-Orange-300 `} >Checkout</Link>
                        
                    </div>
                </div>

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
                    <li className=" transition-all duration-[.3s] ease-in-out hover:text-Orange-900 ">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className=" transition-all duration-[.3s] ease-in-out hover:text-Orange-900 ">
                        <Link to={'/category/headphones'}>Headphones</Link>
                    </li>
                    <li className=" transition-all duration-[.3s] ease-in-out hover:text-Orange-900 ">
                        <Link to={'/category/speakers'}>Speakers</Link>
                    </li>
                    <li className=" transition-all duration-[.3s] ease-in-out hover:text-Orange-900 ">
                        <Link to={'/category/earphones'}>Earphones</Link>
                    </li>
                </ul>
            </nav>
            </Container>
        </header>
    )
}

