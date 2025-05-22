import { productContext, productProps } from "../../context/Context";
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
            <div className="flex w-[40%] h-[48px] px-[10px] items-center justify-between bg-White-600  " >
                <button className="cursor-pointer text-White-300 text-[13px] tracking-[1px] font-bold hover:text-Orange-900 transition-all ease-in-out duration-[.3s] " onClick={() => decrementAmount(props.newItem, false)} >-</button>
                {amount}
                <button className="cursor-pointer text-White-300 text-[13px] tracking-[1px] font-bold hover:text-Orange-900 transition-all ease-in-out duration-[.3s] " onClick={() => incrementAmount(props.newItem)} >+</button>
            </div>
            <button className={` ${style.subtitle} w-[60%] h-[48px] text-white flex items-center justify-center bg-Orange-900 transition-all ease-in-out duration-[.3s] hover:bg-Orange-300 cursor-pointer `} onClick={() => addCart(props.newItem)} >
                Add to cart
            </button>
        </div>
    )
}