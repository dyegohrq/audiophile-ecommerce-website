import { createContext, ReactNode, useState } from "react";

interface ProductContextData {
    product: productProps[];
    addProduct: (newItem: productProps, amount: number) => void;
    // removeProduct: (newItem: productProps) => void;
}

export interface productProps {
    id: number;
    name: string;
    category: string;
    categoryImage: {
        mobile:string;
        tablet: string;
        desktop: string;
    };
    new: boolean;
    description: string;
    price: number;
    amount: number;
    total: number;
    features: string;
    includes: [];
}

interface ProductProvideProps {
    children: ReactNode;
}


export const productContext = createContext({} as ProductContextData)

function ProductProvider( {children}:ProductProvideProps ) {
    const [product, setProduct] = useState<productProps[]>([])


    function addProduct(newItem: productProps, amount: number) {
        const indexItem = product.findIndex( (item) => item.id === newItem.id )

        if (indexItem !== -1) {
            let productItem = [...product]

            productItem[indexItem].amount = amount
            setProduct(productItem)
            return;
        }

        let data = {
            ...newItem,
            amount: amount,
            total: newItem.price
        }

        setProduct(product => [...product, data])
    }

    // function QuantityAdd() {
        
    // }

    // function removeProduct(productItem: productProps) {
    //     const indexItem = product.findIndex((item) => item.id === productItem.id )
    // }

    console.log(product)

    return(
        <productContext.Provider
            value={
                {
                    product,
                    addProduct,
                    // removeProduct
                }
            }
        >
            { children }
        </productContext.Provider>
    )
}

export default ProductProvider;