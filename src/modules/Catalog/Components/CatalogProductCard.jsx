
import '../../../styles/catalog.css'
import cartStore from '../../../stores/CartStore'

export const CatalogProductCard = ({ produsctCard }) => {

    const { title, price, images } = produsctCard
    const { addToCart } = cartStore

    const handleClick = () => {
        addToCart(produsctCard)
    }

    return (
        <div className='product__card'>
            <div>
                <img src={images[1]} alt="productImage" className='productImage' />
            </div>
            <h3>{title}</h3>
            <div className="product__card__ditales">
                <div>
                    <span className='product__card__price'>{price}$</span>
                </div>
                <button className="product__card__btn" onClick={handleClick}>Add to cart</button>
            </div>
        </div>
    )
}