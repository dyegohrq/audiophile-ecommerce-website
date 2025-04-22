import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { api } from "../../services/api"
import { Button } from "../../components/Button";
import style from '../../components/root.module.css'
import './index.css'

interface CategoryProps {
    id: number;
    name:string;
    category: string;
    categoryImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    description: string;
    new: boolean;
    others: [];
    price: number
}

export function Category() {
    const {name} = useParams()
    const [category, setCategory] = useState<CategoryProps[]>([])
    // const [value, setValue] = useState(0)

    useEffect(() => {
        async function getCategory() {
            const response = await api.get('/product')
            setCategory(response.data)
        }

        getCategory()
    }, [])

    const categoryData = category.filter( (item:CategoryProps) => item.category === name )
    const product = [...categoryData].sort((a,b) => Number(b.new) - Number(a.new))
    

    return(
        <main className="flex flex-col items-center" >
            <div className="title bg-black text-white w-full h-[192px] flex items-end justify-center pb-[32px] ">
                <h1 className={style['text-present-4']} > {name} </h1>
            </div>
            {
                product.map((item, index) => (
                    <section  className="lg:flex flex-col lg:flex-row items-center lg:gap-[125px] " >
                        <div className="img_product rounded-[8px]   overflow-hidden">
                            <img src={item.categoryImage.mobile} className="max-h-[327px] sm:hidden w-full h-full object-cover " alt="" />
                            <img src={item.categoryImage.tablet} className="hidden sm:max-h-[352px] sm:block lg:hidden w-full h-full object-cover " alt="" />
                            <img 
                                src={item.categoryImage.desktop} 
                                className={`hidden lg:max-w-[560px] lg:block w-full h-full object-cover`} alt="" />
                        </div>
                        <div 
                        className="text_product mt-[32px] mx-auto flex flex-col items-center text-center gap-[24px] max-w-[327px] lg:text-left lg:items-start"
                        style={ { order: index % 2 !== 0 ? -1 : '' } }
                        >
                            {
                                item.new === true && (<h2 className={style.overline} >New product</h2>)
                            }
                            <h1 className={`${style['text-present-4']}`} > {item.name} </h1>
                            <p className={`${style['text-present-7']}`} >
                                {item.description}
                            </p>
                            <Button classButton="orange" />
                        </div>
                    </section>
                ))
            }
        </main>
    )
}

/**
 * 

  New product
  
  
  
  
  See product
 */