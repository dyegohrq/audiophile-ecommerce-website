import { useContext, useEffect  } from "react";
import { productContext, productProps } from "../../context/Context";
import './index.css'
import style from '../../components/root.module.css'

interface buttonProps {
    newItem: productProps | any ;
}

export function ButtonQuantity( props: buttonProps ) {
    const { addProductCart, more, decrease , amount, product, setProduct } = useContext(productContext)

    function handleAddProduct( item:productProps ) {
        addProductCart(item)
    }

    useEffect(() => {
        const indexItem = product.findIndex((item) => item.id === props.newItem.id)

        if (indexItem !== -1 ) {
            const updatAmount = [...product]

            updatAmount[indexItem].amount = amount
            setProduct(updatAmount)
        }

    }, [amount])

    return(
        <div className=" flex gap-[16px] max-w-[296px] items-center justify-around" >
            <div className="button_quantity flex w-[40%] h-[48px] px-[10px] items-center justify-between " >
                <button className="cursor-pointer" onClick={decrease} >-</button>
                {amount}
                <button className="cursor-pointer" onClick={() => more(props.newItem)} >+</button>
            </div>
            <div className={` ${style.subtitle} button_add w-[60%] h-[48px] text-white flex items-center justify-center `}>
                <button onClick={ () => handleAddProduct( props.newItem ) } className="cursor-pointer">
                    Add to cart
                </button>
            </div>
        </div>
    )
}