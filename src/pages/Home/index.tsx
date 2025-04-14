import { Button } from "../../components/Button";
import style from '../../components/root.module.css'
import './index.css'

export function Home() {
    return(
        <main>
            <section className="header_main flex items-center justify-center text-center lg:justify-start">
                <div className="description w-auto max-w-[328px] flex flex-col items-center gap-[16px] lg:max-w-[1110px] lg:bg-amber-500 lg:items-start">
                    <h3 className={`${style.overline}`} >New product</h3>
                    <h1 className={`${style['text-present-3']} text-white `} >XX99 Mark II Headphones</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Button classButton="orange" />
                </div>
            </section>


            {/* 

            ZX9 speaker
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            See product

            ZX7 speaker
            See product

            YX1 earphones
            See product

            Bringing you the best audio gear
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
            earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
            rooms available for you to browse and experience a wide range of our products. Stop by our store 
            to meet some of the fantastic people who make Audiophile the best place to buy your portable 
            audio equipment.

            Home
            Headphones
            Speakers
            Earphones

            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
            and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
            visit our demo facility - we’re open 7 days a week.

            Copyright 2021. All Rights Reserved */}
        </main>
    )
}