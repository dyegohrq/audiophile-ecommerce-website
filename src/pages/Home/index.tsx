import { Button } from "../../components/Button";
import { FeaturedProduct } from "../../components/FeaturedProduct";
import style from '../../components/root.module.css'
import './index.css'

export function Home() {
    return(
        <main>
            <section className="header_main flex items-center justify-center text-center  lg:text-left lg:justify-between">
                <div className="description w-auto max-w-[328px] flex flex-col items-center gap-[16px] lg:items-start lg:max-w-[340px]">
                    <h3 className={`${style.overline}`} >New product</h3>
                    <h1 className={`${style['text-present-3']} text-white `} >XX99 Mark II Headphones</h1>
                    <p className={`${style['text-present-7']} normal-case`} >Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Button classButton="orange" url="/product/headphones/4" />
                </div>
                <div className="hidden lg:block">
                    
                </div>
            </section>
            <FeaturedProduct/>
            <section className="main flex flex-col gap-[24px] ">
                <article className="zx9 rounded-[8px] lg:flex lg:items-center lg:justify-center">
                    <div className="description flex flex-col justify-center items-center lg:flex-row ">
                        <div className="img-zx9 relative top-[120px] lg:top-[0px]"></div>
                        <div className="text-zx9 text-center flex flex-col items-center gap-[24px] max-w-[380px] lg:text-left lg:items-start ">
                            <h2 className={`${style['text-present-3']} text-white`}>ZX9 <br /> speaker</h2>
                            <p className={`${style['text-present-7']}`} >Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                            <Button classButton="black" url="/product/speakers/6" /> 
                        </div>
                    </div>
                </article>
                <article className="zx7 w-full h-[320px] rounded-[8px] flex items-center " >
                    <div className={`text_zx7 `}>
                        <h2 className={`${style['text-present-4']}`} >ZX7 speaker</h2>
                        <Button classButton="transparent" url="/product/speakers/5" />
                    </div>
                </article>
                <article className="yx1 flex flex-col gap-[24px] sm:flex-row sm:gap-[11px] " >
                    <div className="img-yx1 rounded-[8px] "></div>
                    <div className="text-yx1 rounded-[8px] flex flex-col justify-center gap-[32px] ">
                        <h2 className={style['text-present-4']} >YX1 earphones</h2>
                        <Button classButton="transparent" url="/product/earphones/1" />
                    </div>
                </article>
            </section>
        </main>
    )
}