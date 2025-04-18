import style from '../root.module.css'
import './index.css'

export function About() {
    return(
        <section className="about flex flex-col justify-center items-center lg:flex-row lg:gap-[125px] ">
            <div className="img_about w-full h-[300px] lg:h-[588px] lg:max-w-[540px] lg:order-2"></div>
            <div className="text_about mt-[40px] text-center max-w-[370px] flex flex-col mx-auto gap-[32px] sm:max-w-[573px] lg:text-left lg:max-w-[445px] ">
                <h1 className={`${style['text-present-4']}`} >Bringing you the <span>best</span> audio gear</h1>
                <p className={`${style['text-present-7']}`} >
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                    rooms available for you to browse and experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable
                    audio equipment.
                </p>
            </div>
        </section>
    )
}