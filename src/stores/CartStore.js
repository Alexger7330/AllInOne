import { makeAutoObservable } from "mobx";

class CartStore {

    cart = JSON.parse(localStorage.getItem('cart')) || [];


    constructor() {
        makeAutoObservable(this, undefined, {
            autoBind: true
        })
    }

    get totalPrice() {
        let total = 0;
        this.cart.forEach((cartItem) => {
            total += cartItem.price * cartItem.count
        })
        return total
    }

    get cartCount() {
        let allCount = 0;
        this.cart.forEach(({ count }) => allCount += count)
        return allCount
    }

    addToCart(product) {

        const indexProductInCart = this.cart.findIndex(({ id }) => id === product.id);

        if (indexProductInCart !== -1) {
            this.cart[indexProductInCart].count += 1
        } else {
            product.count = 1;
            this.cart.push(product)
        }

        localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    deleteCartItem = (cartItemId) => {
        this.cart = this.cart.filter(({ id }) => id !== cartItemId)
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }
}

const cartStore = new CartStore();
export default cartStore