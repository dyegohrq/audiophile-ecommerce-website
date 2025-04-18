import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { api } from "../../services/api"
import ImageProductMobile from '/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg'
import ImageProductTablet from '/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg'
import ImageProductDescktop from '../../../public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
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
    others: []
}

export function Category() {
    const {name} = useParams()
    const [category, setCategory] = useState<CategoryProps[]>([])
    const [value, setValue] = useState(0)

    useEffect(() => {
        async function getCategory() {
            const response = await api.get('/product')
            setCategory(response.data)
        }

        getCategory()
    }, [])


    /**
     * 
        {
            category.map(( items ) => (
                items.category === name && (
                    
                )
            ))
        }
     */

    return(
        <main className="flex flex-col items-center" >
            <div className="title bg-black text-white w-full h-[192px] flex items-end justify-center pb-[32px] ">
                <h1 className={style['text-present-4']} ></h1>
            </div>
            {
                category.map((items) => (
                    items.category === name && (
                        <div key={items.id} >
                            <section  className="flex flex-col lg:flex-row items-center lg:gap-[125px] " >
                                <div className="img_product rounded-[8px]   overflow-hidden">
                                    <img src={items.categoryImage.mobile} className="max-h-[327px] sm:hidden w-full h-full object-cover " alt="" />
                                    <img src={items.categoryImage.tablet} className="hidden sm:max-h-[352px] sm:block lg:hidden w-full h-full object-cover " alt="" />
                                    <img 
                                        src={items.categoryImage.desktop} 
                                        className={`hidden lg:max-w-[560px] lg:block w-full h-full object-cover`} alt="" />
                                </div>
                                <div className="text_product mt-[32px] mx-auto flex flex-col items-center text-center gap-[24px] max-w-[327px] lg:text-left lg:items-start">
                                    {
                                        items.new === true && (<h2 className={style.overline} >New product</h2>)
                                    }
                                    <h1 className={`${style['text-present-4']}`} > {items.name} </h1>
                                    <p className={`${style['text-present-7']}`} >
                                        {items.description}
                                    </p>
                                    <Button classButton="orange" />
                                </div>
                            </section>
                        </div>
                    )
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