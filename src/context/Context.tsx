import { createContext, ReactNode, useState } from "react";

interface ProductContextData {
    product: productProps[];
    addProduct: (newItem: productProps, amount: number) => void;
    // removeProduct: (newItem: productProps) => void;
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
    const [total] = useState(0)
    const [amount, setAmount] = useState(0)


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
        setAmount(amount)
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
                    total
                }
            }
        >
            { children }
        </productContext.Provider>
    )
}

export default ProductProvider;