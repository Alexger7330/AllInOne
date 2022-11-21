import { Routes, Route } from "react-router-dom"
import { Catalog } from "./Catalog"
import { Product } from "./Product/Product"

export const CatalogApp = () => {
    return (
        <Routes>
            <Route index path="/" element={<Catalog />} />
            <Route path='/:category/:productId' element={<Product />} />
        </Routes>
    )
}