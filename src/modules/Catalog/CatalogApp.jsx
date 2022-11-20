import { Routes, Route } from "react-router-dom"
import { Catalog } from "./Catalog"

export const CatalogApp = () => {
    return (
        <Routes>
            <Route index path="/" element={<Catalog />} />
            {/* <Route path='/:productId' element={<Product />} /> */}
        </Routes>
    )
}