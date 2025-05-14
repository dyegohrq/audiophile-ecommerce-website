import {  useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import {  productProps } from "../../context/Context"
import { api } from "../../services/api"
import { ButtonQuantity } from "../../components/buttonQuantity"
import './index.css'
import style from '../../components/root.module.css'
import { Button } from "../../components/Button"
import { FeaturedProduct } from "../../components/FeaturedProduct"

export function Product() {
    const { category, id } = useParams()
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
    
    const productData = productItem.filter((item: productProps) => item.category === category)
    const selectedProduct = productData.find((item) => item.id === parseInt(id ?? '')) 
    const includes = selectedProduct?.includes;
    const gallery = selectedProduct?.gallery;
    
    return(
        <main>
            <div className=" w-full h-[90px] bg-black mb-[16px] " ></div>
            <Link to={'/checkout'} className={`${style['text-present-7']}`} >Go back</Link>
            <section className="flex flex-col gap-[32px] md:flex-row md:gap-[69px] lg:gap-[124px] lg:justify-between" >
                <div className="rounded-[8px] overflow-hidden flex items-center img_product md:max-w-[300px] lg:max-w-[740px] " >
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
                    
                    <ButtonQuantity newItem={selectedProduct} />  

                </div>
            </section>
            <section className="flex flex-col gap-[88px] md:gap-[120px] lg:flex-row lg:w-full lg:justify-between " >
                <article className="flex-1/2" >
                    <h1 className={`${style['text-present-4']} mb-[24px] `} >Features</h1>
                    {selectedProduct?.features.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 paragraph" > {paragraph} </p>
                    ))}
                </article>
                <article id="inTheBox" className=" w-full flex flex-col md:flex-row md:justify-between md:max-w-[840px] lg:flex-col lg:flex-1/2 lg:justify-start "  >
                    <h1 className={`${style['text-present-4']} mb-[24px] `} >In the box</h1>
                    <div className="flex flex-col gap-2"  >
                        {
                            includes?.map((item,index) => (
                                <div key={index} className={` ${style['text-present-7']} inTheBoxText flex gap-[24px] text-left `} >
                                    <span className="quantity"> {item.quantity}x </span>
                                    <span className="item" > {item.item} </span>
                                </div>
                            ))
                        }
                    </div>
                </article>
            </section>
            <section>
                <div className="img_detail md:grid gap-[20px] md:grid-cols-2 md:grid-rows-1">
                    {
                        gallery && Object.values(gallery).map((img,index) => (
                            <div 
                                key={index} 
                                className="rounded-[8px] overflow-hidden w-full h-full mt-[20px] " 
                                style={ { order: index === 1 ? 1 : '' , gridRow: index === 2 ? 'span 2' : ''} }
                                >
                                
                                <img 
                                className=" md:hidden object-cover "
                                src={
                                    img.mobile
                                    .replace('./assets', '/assets/')
                                } 
                                alt={selectedProduct.name}
                                />

                                <img 
                                className=" hidden md:block lg:hidden w-full h-full object-cover"
                                src={
                                    img.tablet
                                    .replace("./assets/", '/assets/')
                                } 
                                alt={selectedProduct.name}
                                />
                                
                                <img 
                                className=" hidden lg:block w-full h-full object-cover"                                    
                                src={img.desktop
                                    .replace("./assets/", '/assets/')} 
                                    alt={selectedProduct.name}
                                    />
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="flex flex-col gap-[46px] items-center " >
                <h1 className={style['text-present-4']} >You may also like</h1>
                <div className="flex flex-col gap-[56px] md:flex-row md:gap-[11px] " >
                    {
                        selectedProduct?.others.map((item) => {
                            const relatedProduct = productItem.find((product:productProps) => product.slug === item.slug)
                            return(
                                <div key={item.name} className="flex flex-col gap-[32px] items-center " >
                                    <div className="rounded-[8px] overflow-hidden" >
                                        <img
                                        src={item.image.mobile.replace("./assets/", '/assets/')}
                                        alt=""
                                        className="md:hidden"
                                        />
                                        <img
                                        src={item.image.tablet.replace("./assets/", '/assets/')}
                                        alt=""
                                        className="hidden md:block lg:hidden "
                                        />
                                        <img
                                        src={item.image.desktop.replace("./assets/", '/assets/')}
                                        alt=""
                                        className="hidden lg:block"
                                        />
                                    </div>
                                    <h2 className={style['text-present-5']} > {item.name} </h2>
                                    <Button classButton="orange" url={`/product/${relatedProduct?.category}/${relatedProduct?.id}/${item.slug}`} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <FeaturedProduct/>
        </main>
    )
}