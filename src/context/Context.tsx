import { createContext, ReactNode, useState } from "react";

interface ProductContextData {
    product: productProps[];
    addProduct: (newItem: productProps) => void;
    removeProduct: (newItem: productProps) => void
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
    amount: number
}

interface ProductProvideProps {
    children: ReactNode;
}


export const productContext = createContext({} as ProductContextData)

function ProductProvider( {children}:ProductProvideProps ) {
    const [product] = useState([])


    function addProduct(newItem: productProps) {
        console.log(newItem)
    }

    function removeProduct(newItem: productProps) {
        console.log(newItem)
    }


    return(
        <productContext.Provider
            value={
                {
                    product,
                    addProduct,
                    removeProduct
                }
            }
        >
            { children }
        </productContext.Provider>
    )
}

export default ProductProvider