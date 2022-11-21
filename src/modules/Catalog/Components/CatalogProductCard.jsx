
import '../../../styles/catalog.css'
import cartStore from '../../../stores/CartStore'
import { Link } from 'react-router-dom'

export const CatalogProductCard = ({ produsctCard }) => {

    const { title, price, images, id, category } = produsctCard
    const { addToCart } = cartStore

    const handleClick = () => {
        addToCart(produsctCard)
    }

    return (
        <div className='product__card'>
            <div>
                <img src={images[1]} alt="productImage" className='productImage' />
            </div>
            <h3><Link to={`./${category.name}/${id}`}>{title}</Link></h3>
            <div className="product__card__ditales">
                <div>
                    <span className='product__card__price'>{price}$</span>
                </div>
                <button className="product__card__btn" onClick={handleClick}>Add to cart</button>
            </div>
        </div>
    )
}