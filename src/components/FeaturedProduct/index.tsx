import { ButtonShop } from "../buttonShop";
import ImgEarphones from '/assets/shared/desktop/image-category-thumbnail-earphones.png'
import ImgHeadphones from '/assets/shared/desktop/image-category-thumbnail-headphones.png'
import ImgSpeakers from '/assets/shared/desktop/image-category-thumbnail-speakers.png'
import './index.css'

export function FeaturedProduct() {
    return(
        <section className="card_product flex  " >
            <div className="card">
                <img src={ImgHeadphones} alt="" />
                Headphones
                <ButtonShop/>
            </div>

            {/* Speakers
            Shop

            Earphones
            Shop */}
        </section>
    )
}