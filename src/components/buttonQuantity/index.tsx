import { useContext, useEffect, useState } from "react";
import { productContext, productProps } from "../../context/Context";
import './index.css'
import style from '../../components/root.module.css'
import { useLocation } from "react-router";

interface buttonProps {
    amount: number | undefined ;
    newItem: productProps | any ;
}

export function ButtonQuantity( props: buttonProps ) {
    const { addProduct } = useContext(productContext)
    const [quantity, setQuantity] = useState(1)
    const location = useLocation()

    useEffect(() => {
        setQuantity(1)
    }, [location])

    function more() {
        setQuantity( (num) => num + 1 )
    }

    function less() {
        if (quantity > 1) {
            setQuantity( (num) => num - 1 )
        }
    }

    function handleAddProduct(item:productProps, amount:number) {
        addProduct(item,amount)
    }

    return(
        <div className=" flex gap-[16px] max-w-[296px] items-center justify-around" >
            <div className="button_quantity flex w-[40%] h-[48px] px-[10px] items-center justify-between " >
                <button onClick={ () => less()  } className="cursor-pointer" >-</button>
                    {quantity}
                <button onClick={ () => more()  } className="cursor-pointer" >+</button>
            </div>
            <div className={` ${style.subtitle} button_add w-[60%] h-[48px] text-white flex items-center justify-center `}>
                <button onClick={ () => handleAddProduct(props.newItem, quantity) } className="cursor-pointer">
                    Add to cart
                </button>
            </div>
        </div>
    )
}