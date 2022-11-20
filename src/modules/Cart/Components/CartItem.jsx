import '../../../styles/cart.css'

export const CartItem = ({ cartItem, deleteCartProduct }) => {

    const { images, title, price, count, id } = cartItem

    const handleClick = (id) => {
        deleteCartProduct(id)
    }

    return (
        <>
            <div className="cartItem">
                <div className='imageAndAbout'>
                    <img className='cartItem__image' src={images[1]} alt="image" />
                    <h2>{title}</h2>
                </div>
                <div className='cartItem__information'>
                    <p>{count}</p>
                    <p>{price * count}$</p>
                    <p className='deleteBtn' onClick={() => { handleClick(id) }}><i className="fa fa-trash-o" aria-hidden="true"></i></p>

                </div>
            </div>
        </>
    )
}