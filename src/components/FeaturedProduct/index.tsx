import { ButtonShop } from "../buttonShop";
import ImgEarphones from '/assets/shared/desktop/image-category-thumbnail-earphones.png'
import ImgHeadphones from '/assets/shared/desktop/image-category-thumbnail-headphones.png'
import ImgSpeakers from '/assets/shared/desktop/image-category-thumbnail-speakers.png'
import './index.css'
import style from '../root.module.css'

export function FeaturedProduct() {
    return(
        <section className="card_product flex flex-col gap-[68px] sm:flex-row sm:gap-[10px] " >

            <div className="card relative flex flex-col items-center justify-end w-full h-[165px] rounded-[8px] ">
                <img src={ImgHeadphones} alt="" className="absolute"/>
                <h4 className={`${style['text-present-7']} uppercase`}>Headphones</h4>
                <ButtonShop url="/category/headphones" />
            </div>
            <div className="card relative flex flex-col items-center justify-end w-full h-[165px] rounded-[8px] ">
                <img src={ImgSpeakers} alt="" className="absolute"/>
                <h4 className={`${style['text-present-7']} uppercase`}>Speakers</h4>
                <ButtonShop url="/category/speakers" />
            </div>
            <div className="card relative flex flex-col items-center justify-end w-full h-[165px] rounded-[8px] ">
                <img src={ImgEarphones} alt="" className="absolute"/>
                <h4 className={`${style['text-present-7']} uppercase`}>Earphones</h4>
                <ButtonShop url="/category/earphones" />
            </div>
        </section>
    )
}