import { createContext, ReactNode, useState } from "react";

interface ProductContextData {
    product: productProps[];
    setProduct: React.Dispatch<React.SetStateAction<productProps[]>>;
    incrementAmount: (product: productProps) => void;
    decrementAmount: (product: productProps, fromCart: boolean) => void;
    getAmountByProduct: (product: productProps) => number;
    addCart: (product: productProps) => void;
    calculateTotal: () => number;
    removeAll: () => void;
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
    const [productAmounts, setProductsAmounts] = useState<Record<string, number>> ({})


    const incrementAmount = (product: productProps) => {
        setProductsAmounts((prev) => ({
            ...prev,
            [product.id]: (prev[product.id] || 1) + 1
        }))
    }

    const decrementAmount = (product: productProps, fromCart: boolean = false) => {
        setProductsAmounts(prev => {
          const currentAmount = prev[product.id] || 1;
      
          // Se estiver no carrinho e o amount for 1 ou menor, removemos o item
          if (fromCart && currentAmount <= 1) {
            // Remover do carrinho
            setProduct(currentCart => currentCart.filter(item => item.id !== product.id));
      
            // Remover do productAmounts
            const updatedAmounts = { ...prev };
            delete updatedAmounts[product.id];
            return updatedAmounts;
          }
      
          // Se não for no carrinho, só decrementa
          return {
            ...prev,
            [product.id]: Math.max(currentAmount - 1, 1), // Mantém o valor mínimo de 1
          };
        });
      };

    const getAmountByProduct = (product?: productProps): number => {
        if (!product) return 1;
        return productAmounts[product.id] || 1
    }

    const addCart = (product: productProps) => {
        const amount = getAmountByProduct(product)

        setProduct(prev => {
            const existing = prev.find(item => item.id === product.id)

            if (existing) {
                return prev.map(item => item.id === product.id ? {...item, amount: item.amount + amount} : item )
            }
            return [...prev, {...product, amount}]
        })
    }

    const calculateTotal = () => {
        return product.reduce((total, item) => {
            const amount = productAmounts[item.id] || 1

            return total + (item.price * amount)
        }, 0)
    }

    const removeAll = () => {return setProduct([])}

    return(
        <productContext.Provider
            value={
                {
                    product,
                    setProduct,
                    incrementAmount,
                    decrementAmount,
                    addCart,
                    getAmountByProduct,
                    calculateTotal, 
                    removeAll
                }
            }
        >
            { children }
        </productContext.Provider>
    )
}

export default ProductProvider;