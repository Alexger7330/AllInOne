import { makeAutoObservable } from "mobx";


class ProductStore {

    allProductsInCategory = [];
    productById = {}

    constructor() {
        makeAutoObservable(this)
    }

    getProductById = (category, id) => {
        this.allProductsInCategory = [...JSON.parse(localStorage.getItem(`${category}`))]
        this.allProductsInCategory.forEach((product) => {
            if (product.id == id) {
                this.productById = { ...product }
            }
        })
    }

}

const productStore = new ProductStore()

export default productStore