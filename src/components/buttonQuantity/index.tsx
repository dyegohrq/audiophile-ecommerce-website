import { productContext, productProps } from "../../context/Context";
import './index.css'
import style from '../../components/root.module.css'
import { useContext } from "react";

interface buttonProps {
    newItem: productProps | any ;
}

export function ButtonQuantity( props: buttonProps ) {
    const { incrementAmount, decrementAmount, getAmountByProduct, addCart } = useContext(productContext)

    const amount = getAmountByProduct(props.newItem)

    return(
        <div className=" flex gap-[16px] max-w-[296px] items-center justify-around" >
            <div className="button_quantity flex w-[40%] h-[48px] px-[10px] items-center justify-between " >
                <button className="cursor-pointer" onClick={() => decrementAmount(props.newItem, false)} >-</button>
                {amount}
                <button className="cursor-pointer" onClick={() => incrementAmount(props.newItem)} >+</button>
            </div>
            <div className={` ${style.subtitle} button_add w-[60%] h-[48px] text-white flex items-center justify-center `}>
                <button className="cursor-pointer" onClick={() => addCart(props.newItem)} >
                    Add to cart
                </button>
            </div>
        </div>
    )
}