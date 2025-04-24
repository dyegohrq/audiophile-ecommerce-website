import { useEffect, useState } from "react"
import { api } from "../../services/api"

interface CategoryProps {
    id: number;
    name: string;
}

export default function Category() {
    const [category, setCategory] = useState<CategoryProps[]>()

    useEffect(() => {
        async function getCategory() {
            const response = await api.get('/data.json')
            console.log(response.data)
            setCategory(response.data)
        }

        getCategory()
    }, [])
    
    return(
        <main>
            {
                category?.map((product) => (
                    <section>
                        <h1> {product.name} </h1>
                    </section>
                ))
            }
        </main>
    )
}