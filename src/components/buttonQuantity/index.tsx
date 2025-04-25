import { useContext, useState } from "react";
import { productContext, productProps } from "../../context/Context";
import './index.css'
import style from '../../components/root.module.css'

interface buttonProps {
    amount: number | undefined ;
    newItem: productProps | any ;
}

export function ButtonQuantity( props: buttonProps ) {
    const { addProduct, removeProduct } = useContext(productContext)
    const [quantity, setQuantity] = useState(0)

    function more() {
        setQuantity( (num) => num + 1 )
    }

    function less() {
        if (quantity > 0) {
            setQuantity( (num) => num - 1 )
        }
    }

    function handleAddProduct(item:productProps, amount:number) {
        addProduct(item,amount)
    }

    return(
        <div className=" flex gap-[16px] max-w-[296px] items-center justify-around" >
            <div className="button_quantity flex w-[40%] items-center justify-between " >
                <button onClick={ () => less()  } >-</button>
                    {quantity}
                <button onClick={ () => more()  } >+</button>
            </div>
            <div className={` ${style.subtitle} button_add w-[60%] text-white flex items-center justify-center `}>
                <button onClick={ () => handleAddProduct(props.newItem, quantity) }>
                    Add to cart
                </button>
            </div>
        </div>
    )
}