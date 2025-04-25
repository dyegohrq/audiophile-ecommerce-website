import {  useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import {  productProps } from "../../context/Context"
import { api } from "../../services/api"
import { ButtonQuantity } from "../../components/buttonQuantity"
import './index.css'
import style from '../../components/root.module.css'

export function Product() {
    const { name, id } = useParams()
    const [productItem, setProductItem] = useState <productProps[]> ([])
    // const { product } = useContext(productContext)
    
    useEffect(() => {
        async function getProduct() {
            await api.get('/data.json')
            .then((res) => {
                const data = res.data
                const updateData = data.map((item: any) => ({
                    ...item,
                    amount: 0,
                    total: 0
                }))
                
                setProductItem(updateData)
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
    
    const productData = productItem.filter((item: productProps) => item.category === name)
    const selectedProduct = productData.find((item) => item.id === parseInt(id ?? ''))    


    return(
        <main>
            <div className=" w-full h-[90px] bg-black mb-[16px] " ></div>
            <Link to={'/'} className={style['text-present-7']} >Go back</Link>
            <section className="flex flex-col gap-[32px] md:flex-row md:gap-[69px] lg:gap-[124px]" >
                <div className="rounded-[8px] overflow-hidden flex items-center img_product md:max-w-[300px] lg:max-w-[540px] " >
                    <img 
                        src={selectedProduct?.categoryImage.mobile.replace('./assets', '/assets/')} 
                        alt={selectedProduct?.name}
                        className="md:hidden"
                    />
                    <img 
                        src={selectedProduct?.categoryImage.tablet.replace('./assets', '/assets/')} 
                        alt={selectedProduct?.name}
                        className="hidden md:block lg:hidden " 
                    />
                    <img 
                        src={selectedProduct?.categoryImage.desktop.replace('./assets', '/assets/')} 
                        alt={selectedProduct?.name}
                        className="hidden lg:block " 
                    />
                </div>
                <div className={ "text_product flex flex-col gap-[24px] justify-center lg:max-w-[445px] " } >
                    {
                        selectedProduct?.new && (
                            <h2 className={`${style.overline}`} >New product</h2>
                        )
                    }
                    <h1 className={`${style['text-present-4']} max-w-[327px] md:max-w-[339px] lg:max-w-[345px] `} > {selectedProduct?.name} </h1>
                    <p className="paragraph" > {selectedProduct?.description} </p>
                    <strong className={style['text-present-5']} > {selectedProduct?.price.toLocaleString( 'en-US', {
                        style: 'currency',
                        currency: 'USD'
                    } )} </strong>
                    
                    <ButtonQuantity amount={selectedProduct?.amount} newItem={selectedProduct} />
                </div>
            </section>
            <section>
                <h1 className={`${style['text-present-4']} mb-[24px] `} >Features</h1>
                {selectedProduct?.features.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 paragraph" > {paragraph} </p>
                ))} 
            </section>
            <section>
                <h1 className={`${style['text-present-4']} mb-[24px] `} >In the box</h1>
                <div>
                    
                </div>
            </section>
        </main>
    )
}