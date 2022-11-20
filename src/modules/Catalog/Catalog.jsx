import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import catalogStore from "./stores/catalogStore"
import { v4 as uuidv4 } from "uuid"
import '../../styles/catalog.css'
import { CatalogProductCard } from "./Components/CatalogProductCard"

export const Catalog = observer(() => {

    const { categories, isCategoriesLoading, loadCatigories, categoryIndex, productsByCategory, isProductsLoading, loadCategory, setCategory } = catalogStore

    useEffect(() => {
        loadCatigories()
    }, [])

    useEffect(() => {
        if (categories) {
            loadCategory(categories[categoryIndex]);
        }
    }, [categories, categoryIndex]);


    return (
        <div className='catalog__wrapper'>
            {isCategoriesLoading && <div className="loader">Loading...</div>}
            {!isCategoriesLoading && <div className="container">
                <div className='category__wrapper'>
                    {categories && categories.map(({ name }, index) =>
                        <button className="category__button" key={uuidv4()} onClick={() => setCategory(index)} >{name}</button>
                    )}
                </div>

                {isProductsLoading && <div className="loader">Loading...</div>}
                {!isProductsLoading && productsByCategory &&
                    <div className="product__cards">
                        {productsByCategory.map((item) =>
                            <CatalogProductCard key={uuidv4()} produsctCard={item} />
                        )}
                    </div>
                }

            </div>}
        </div>
    )
})