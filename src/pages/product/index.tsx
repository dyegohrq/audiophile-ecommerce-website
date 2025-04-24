import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { productProps } from "../../context/Context"
import { api } from "../../services/api"
import { ButtonQuantity } from "../../components/buttonQuantity"

export function Product() {
    const { name, id } = useParams()
    const [product, setProduct] = useState <productProps[]> ([])
    
    useEffect(() => {
        async function getProduct() {
            await api.get('/data.json')
            .then((res) => {
                const data = res.data
                const updateData = data.map((item: any) => ({
                    ...item,
                    amount: 0
                }))
                
                setProduct(updateData)
            })
            .catch((error) => {
                if (error instanceof Error) {
                    console.error(`Unable to fetch data: ${error.message}`);
                } else {
                    console.error("An unknown error occurred", error);
                }
            })
            
            window.scrollTo({top: 0, behavior: 'smooth' })            
        }
        
        getProduct()
    }, [])
    
    const productData = product.filter((item: productProps) => item.category === name)
    const selectedProduct = productData.find((item) => item.id === parseInt(id ?? ''))    

    return(
        <main>
            <Link to={'/'} >Go back</Link>
            <section>
                <div>
                    <img 
                        src={selectedProduct?.categoryImage.mobile.replace('./assets', '/assets/')} 
                        alt={selectedProduct?.name}
                        className="md:hidden"
                    />
                    <img 
                        src={selectedProduct?.categoryImage.tablet.replace('./assets', '/assets/')} 
                        alt={selectedProduct?.name}
                        className="hidden md:block lg:hidden  " 
                    />
                    <img 
                        src={selectedProduct?.categoryImage.desktop.replace('./assets', '/assets/')} 
                        alt={selectedProduct?.name}
                        className="hidden lg:block " 
                    />
                </div>
                <div>
                    {
                        selectedProduct?.new && (
                            <h2> New product </h2>
                        )
                    }
                    <h1> {selectedProduct?.name} </h1>
                    <p> {selectedProduct?.description} </p>
                    <strong> {selectedProduct?.price.toLocaleString( 'en-US', {
                        style: 'currency',
                        currency: 'USD'
                    } )} </strong>
                    <ButtonQuantity amount={selectedProduct?.amount} newItem={selectedProduct} />
                </div>
            </section>
        </main>
    )
}