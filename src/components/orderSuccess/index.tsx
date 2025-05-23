import { useContext } from "react";
import iconImg from "../../../public/assets/checkout/icon-order-confirmation.svg";
import { productContext } from "../../context/Context";
import style from "../root.module.css";

export function OrderSuccess() {
  const { product, grandTotal } = useContext(productContext);

  return (
    <section className="bg-black/50 fixed w-full h-full inset-0 flex items-center justify-center hidden ">
      <div className="bg-white w-[80%] max-w-[540px] p-[32px] rounded-[8px] ">
        <img src={iconImg} alt=" success order " />
        <h2 className={` ${style['text-present-4']} mt-[32px] mb-[16px] `} >Thank You <br /> for your Order</h2>
        <p className={`${style['text-present-7']} text-White-300 mb-[24px] `} > You will receive an email confirmation shortly </p>

        <div className=" rounded-[8px] overflow-hidden " >
          <div className="bg-Gray-300" >
            <ul>
              {product.map((item) => (
                <li className=" flex justify-between items-center p-[24px] " >
                  <div className=" max-w-[64px] max-h-[64px] overflow-hidden rounded-[8px]  ">
                    <img
                      src={item.categoryImage.mobile.replace(
                        "./assets/",
                        "/assets/"
                      )}
                      alt={item.slug}
                    />
                  </div>
                  <div className="">
                    <h3 className={`${style["text-present-7"]}`}>
                      {" "}
                      {item.name
                        .replace("Headphones", "")
                        .replace("Wireless Earphones", "")}{" "}
                    </h3>
                    <span className="text-White-300 font-bold">
                      {" "}
                      {item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}{" "}
                    </span>
                  </div>
                    <div>
                      <span className="font-[15px] leading-[25px] font-bold text-White-300 ">
                        x {item.amount}
                      </span>
                    </div>
                </li>
              ))}
            </ul>
            <button> and 2 other item(s) </button>
          </div>
          <div className="bg-Black-300" >
            <h2>Grand Total</h2>
            <span> {grandTotal()} </span>
          </div>
        </div>
      </div>
    </section>
  );
}
