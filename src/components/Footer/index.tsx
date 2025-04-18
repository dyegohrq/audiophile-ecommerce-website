import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router";
import LogoImg from '/assets/shared/desktop/logo.svg'
import style from '../root.module.css'
import './index.css'

export function Footer() {
    return(
        <footer className="flex flex-col gap-[48px] items-center sm:items-start ">
            <div className="line"></div>
            <div className="nav w-full flex flex-col gap-[48px] items-center sm:items-start sm:gap-[32px] lg:flex-row lg:justify-between ">
                <Link to={'/'} >
                    <img src={LogoImg} alt="audiophile" />
                </Link>
                <ul className=" nav_item flex flex-col gap-[16px] text-center sm:text-left sm:flex-row sm:gap-[34px] ">
                    <li className={`${style.subtitle} text-white `}>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className={`${style.subtitle} text-white `} >
                        <Link to={'/'}>Headphones</Link>
                    </li>
                    <li className={`${style.subtitle} text-white `} >
                        <Link to={'/'}>Speakers</Link>
                    </li>
                    <li className={`${style.subtitle} text-white `} >
                        <Link to={'/'}>Earphones</Link>
                    </li>
                </ul>
            </div>

            <p className="text-center sm:text-left lg:max-w-[540px] " >
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                visit our demo facility - we’re open 7 days a week.
            </p>

            <div className="copy w-full flex flex-col gap-[48px] sm:flex-row sm:justify-between sm:items-center ">
                <p>Copyright 2021. All Rights Reserved</p> 
                <div className="social_media flex items-center justify-center gap-[16px] ">
                    <a href="#">
                        <IoLogoFacebook />
                    </a>
                    <a href="#">
                        <BsTwitterX />
                    </a>
                    <a href="#">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    )
}