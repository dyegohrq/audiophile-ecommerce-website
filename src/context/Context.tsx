import { createContext, ReactNode, useState } from "react";

interface ProductContextData {
    product: productProps[];
}

interface productProps {
    id: number;
    name: string;
    category: string;
    categoryImage: {
        mobile:string;
        tablet: string;
        descktop: string;
    };
    new: boolean;
    description: string;
}

interface ProductProvideProps {
    children: ReactNode;
}


export const productContext = createContext({} as ProductContextData)

function ProductProvider( {children}:ProductProvideProps ) {
    const [product, setProduct] = useState([])


    return(
        <productContext.Provider
            value={
                {
                    product
                }
            }
        >
            { children }
        </productContext.Provider>
    )
}

export default ProductProvider