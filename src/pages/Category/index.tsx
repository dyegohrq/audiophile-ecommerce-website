import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useParams } from "react-router";
import { productProps } from "../../context/Context";
import { Button } from "../../components/Button";
import style from '../../components/root.module.css'
import './index.css'
import { FeaturedProduct } from "../../components/FeaturedProduct";


export default function Category() {
    const [category, setCategory] = useState<productProps[]>([])
    const {name} = useParams()

    useEffect(() => {
        async function getCategory() {
            await api.get('/data.json')
            .then((res) => {
                setCategory(res.data)
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

        getCategory()
    }, [])

     
    const categoryData = category?.filter((item:productProps ) => item.category === name ) 
    const products = [...categoryData].sort((a,b) => Number(b.new) - Number(a.new))
    
    return(
        <main>
            <h1 className={ `${style['text-present-4']} bg-black pt-[140px] pb-[50px] text-white text-center ` } > {name} </h1>
            {
                products.map((product, index) => (
                    <section key={product.id} className={ 'py-[60px] w-full lg:flex flex-col items-center gap-[32px] lg:flex-row ' } >
                        <div className=" rounded-[8px] overflow-hidden lg:max-w-[540px] " >
                            <img 
                                src={product.categoryImage.mobile.replace('./assets', '/assets/')} 
                                alt={product.name}
                                className="md:hidden"
                            />
                            <img 
                                src={product.categoryImage.tablet.replace('./assets', '/assets/')} 
                                alt={product.name}
                                className="hidden md:block lg:hidden  " 
                            />
                            <img 
                                src={product.categoryImage.desktop.replace('./assets', '/assets/')} 
                                alt={product.name}
                                className="hidden lg:block " 
                            />
                        </div>
                        <div 
                            className='text_product flex flex-col gap-[24px] items-center text-center mx-auto mt-[52px] max-w-[327px] md:max-w-[527px] lg:text-left lg:items-start ' 
                            style={ { order: index % 2 !== 0 ? -1 : '' } }    
                        >
                            {
                                product.new && (
                                    <h2 className={`${style.overline}`} >New product</h2>
                                )
                            }
                            <h1 className={`${style['text-present-4']}`} > {product.name} </h1>
                            <p className={`${style['text-present-7']}`} >
                                {product.description}
                            </p>
                            <Button classButton="orange" url={`/product/${product.category}/${product.id}`} />
                        </div>
                    </section>
                ))
            }
            <FeaturedProduct/>
        </main>
    )
}