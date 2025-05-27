import { useContext, useEffect, useState } from "react";
import iconImg from "/assets/checkout/icon-order-confirmation.svg";
import { productContext, productProps } from "../../context/Context";
import style from "../root.module.css";
import { useNavigate } from "react-router";

export function OrderSuccess({
  setIsOrderSuccess,
  productItem,
  resetForm
}: {
  setIsOrderSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  productItem: productProps[];
  resetForm: () => void
}) {
  const { grandTotal, removeAll } = useContext(productContext);
  const remainingNumItems = productItem.length - 1;
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const body = document.body
  const productsToShow = showAll ? productItem : [productItem[0]]

  const toggleShowAll  = () => {
    setShowAll((prev) => !prev)
  }


  function handleButtonClick() {
    setIsOrderSuccess(false)
    navigate('/')
    removeAll()
    resetForm()
  }

  function handleClose() {
    setIsOrderSuccess(false)
    body.style.overflow = 'auto'
  }

  useEffect(() => {
    window.scrollTo({top: 0, behavior:'smooth'})
    body.style.overflow = 'hidden'
  }, [])

  console.log(productItem)

  return (
    <section 
      className="bg-black/50 fixed w-full h-full inset-0 flex items-center justify-center "
      onClick={handleClose} 
      >
      <div 
        className="bg-white w-[80%] max-w-[540px] max-h-[900px] p-[32px] rounded-[8px] overflow-auto z-50 "
        onClick={(e) => e.stopPropagation() }
        >
        <img src={iconImg} alt=" success order " />
        <h2 className={` ${style['text-present-4']} mt-[32px] mb-[16px] `} >Thank You <br /> for your Order</h2>
        <p className={`${style['text-present-7']} text-White-300 mb-[24px] `} > You will receive an email confirmation shortly </p>

        <div className=" rounded-[8px] overflow-auto w-full flex flex-col md:flex-row " >
          <div className="bg-White-600 p-[24px] w-full md:w-[60%] " >
            <ul
              className={` flex flex-col gap-[16px] pb-[16px] border-b border-White-300`}
            >
              {productsToShow.map((item) => (
                <li key={item.id} className=" flex justify-between items-center" >
                  <div className=" max-w-[64px] max-h-[64px] overflow-hidden rounded-[8px]  ">
                    <img src={item.categoryImage.mobile.replace("./assets/", "/assets/")} alt={item.slug} />
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
            {
              productItem.length > 1 && (<button onClick={toggleShowAll} className={`cursor-pointer font-manrope text-[12px] font-bold tracking-[0.21px] text-White-300 w-full h-[30px] `} > { !showAll ? `and ${remainingNumItems} other item(s)` : 'View less' } </button>)
            }
          </div>
          <div className={`bg-Black-300 p-[24px] w-full md:w-[40%] flex flex-col ${showAll? 'justify-end pb-[41px] ' : 'justify-center' }  `} >
            <h2 className={`${style['text-present-7']} uppercase text-White-300` } >Grand Total</h2>
            <span className=" text-White " > {
                grandTotal().toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })
              }
            </span>
          </div>
        </div>
        <button
          onClick={handleButtonClick} 
          className="w-full h-[48px] border-0 bg-Orange-900 uppercase  font-manrope text-[13px] font-bold tracking-[1px] transition-all duration-[.5s] ease-in-out cursor-pointer hover:bg-Orange-300 text-White mt-[23px] md:mt-[48px] " >Back to home</button>
      </div>
    </section>
  );
}
