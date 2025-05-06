import { createContext, ReactNode, useState } from "react";

interface ProductContextData {
    product: productProps[];
    addProductCart: (newItem: productProps) => void;
    more: (item:productProps) => void;
    decrease: () => void;
    amount: number;
    total: number;
}

export interface productProps {
    id: number;
    slug: string;
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
    includes: [{
        quantity: number, 
        item:string
    }];
    gallery: {
        first: {
            mobile:string;
            tablet:string;
            desktop:string;
        },
        second: {
            mobile:string;
            tablet:string;
            desktop:string;
        },
        third: {
            mobile:string;
            tablet:string;
            desktop:string;
        },
    },
    others: [
        {
            slug: string;
            name: string;
            image: {
                mobile: string;
                tablet: string;
                desktop: string
            }
        }
    ]
}

interface ProductProvideProps {
    children: ReactNode;
}


export const productContext = createContext({} as ProductContextData)

function ProductProvider( {children}:ProductProvideProps ) {
    const [product, setProduct] = useState<productProps[]>([])
    const [amount, setAmount] = useState(1)
    const [total, setTotal] = useState(0)

    function addProductCart(newItem: productProps) {
        const indexItem = product.findIndex((item) => item.id === newItem.id)

        if (indexItem !== - 1) {
            let updatedProducts  = [...product];

            updatedProducts[indexItem].amount = amount
            setProduct(updatedProducts)
            return;
        }

        let data = {
            ...newItem,
            amount
        }

        setProduct(product => [...product, data])
    }

    function more(productItem: productProps) {
        const indexItem = product.findIndex((item) => item.id === productItem.id )
        
        if (indexItem !== - 1 ) {
            let updatedProducts = product
            
            updatedProducts[indexItem].amount += 1
            setProduct(updatedProducts)

        } else {
            setAmount((prev) => prev + 1)
        }
    }

    function decrease() {
        if (amount > 1) {
            setAmount((prev) => prev - 1)
        }
    }

    console.log(product)

    return(
        <productContext.Provider
            value={
                {
                    product,
                    addProductCart,
                    more,
                    decrease,
                    amount,
                    total
                }
            }
        >
            { children }
        </productContext.Provider>
    )
}

export default ProductProvider;