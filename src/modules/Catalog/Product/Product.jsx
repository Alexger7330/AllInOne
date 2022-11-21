import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import productStore from "./stores/ProductStore";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import '../../../styles/catalog.css'
import arrowBack from '../../../images/CatalogProduct/rightArrow.svg'
import cartStore from "../../../stores/CartStore";

export const Product = observer(() => {

    const { category, productId } = useParams()
    const { productById, getProductById } = productStore
    const { title, price, description, images } = productById

    const { addToCart } = cartStore

    const handleClick = () => {
        addToCart(productById)
    }

    useEffect(() => {
        getProductById(category, productId)
    }, [])


    return (
        <div className="container">
            <div className="product__wrapper">
                <div className="arrowBack">
                    <Link to={'/catalog'}><img src={arrowBack} alt="arrow" /></Link>
                </div>
                <div className="product__imageAndInf">
                    <div className="product__image__wrapper">
                        <img className="product__image" src={images} alt={title} />
                    </div>
                    <div className="produst__information">
                        <h1>{title}</h1>
                        <p className="product__description">{description}</p>
                        <div className="product__priceAndBtn">
                            <button className="product__card__btnForCart" onClick={handleClick}>Add to cart</button>
                            <p className="product__price">{price}$</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
})