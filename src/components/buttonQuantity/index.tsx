import { useContext } from "react";
import { productContext, productProps } from "../../context/Context";

interface buttonProps {
    amount: number | undefined ;
    newItem: productProps | any ;
}

export function ButtonQuantity( props: buttonProps ) {
    const { addProduct, removeProduct } = useContext(productContext)

    return(
        <div>
            <button onClick={ () => removeProduct( props.newItem ) } >-</button>
            {props.amount}
            <button onClick={ () => addProduct( props.newItem ) } >+</button>
        </div>
    )
}