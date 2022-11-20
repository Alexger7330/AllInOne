import { observer } from "mobx-react-lite"
import cartStore from "../../stores/CartStore"
import { v4 as uuidv4 } from 'uuid'
import { CartItem } from "./Components/CartItem"
import '../../styles/cart.css'

export const Cart = observer(() => {

    const { cart, deleteCartItem, totalPrice } = cartStore

    return (
        <div className="container cart">
            {cart.length === 0 && <h2 className="cartEmpty">Cart is Empty</h2>}
            {cart.length > 0 &&
                <div className="cart__wrapper">
                    <div className="signatures">
                        <p>Product</p>
                        <p>Quantity <span className="totalPrice">Total price</span></p>
                    </div>
                    <div className="cartItems__wrapper" key={uuidv4()}>
                        {
                            cart.map((cartItem) =>
                                <CartItem cartItem={cartItem} key={uuidv4()} deleteCartProduct={deleteCartItem} />
                            )
                        }

                    </div>
                    <div className="subtotalPrice">subtotal: <span>{totalPrice}</span>$</div>
                </div>
            }
        </div>
    )
})