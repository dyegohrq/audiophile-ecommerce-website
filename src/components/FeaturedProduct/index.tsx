import { ButtonShop } from "../buttonShop";
import ImgEarphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import ImgHeadphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import ImgSpeakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import "./index.css";
import style from "../root.module.css";
import { Container } from "../container/Container";

export function FeaturedProduct() {
  return (
    <Container>
      <section className="flex flex-col gap-[68px] my-[90px] sm:flex-row sm:gap-[10px] sm:justify-between">
        <div className="relative flex flex-col items-center justify-end w-full h-[165px] rounded-[8px] bg-White-600 ">
          <img
            src={ImgHeadphones}
            alt=""
            className="absolute w-[114px] h-[104px] top-[-38px] "
          />
          <h4 className={`${style["text-present-7"]} uppercase`}>Headphones</h4>
          <ButtonShop url="/category/headphones" />
        </div>
        <div className="relative flex flex-col items-center justify-end w-full h-[165px] rounded-[8px] bg-White-600 ">
          <img
            src={ImgSpeakers}
            alt=""
            className="absolute w-[114px] h-[104px] top-[-38px] "
          />
          <h4 className={`${style["text-present-7"]} uppercase`}>Speakers</h4>
          <ButtonShop url="/category/speakers" />
        </div>
        <div className="relative flex flex-col items-center justify-end w-full h-[165px] rounded-[8px] bg-White-600 ">
          <img
            src={ImgEarphones}
            alt=""
            className="absolute w-[114px] h-[104px] top-[-38px] "
          />
          <h4 className={`${style["text-present-7"]} uppercase`}>Earphones</h4>
          <ButtonShop url="/category/earphones" />
        </div>
      </section>
    </Container>
  );
}
