import { makeAutoObservable, runInAction } from "mobx";

class CatalogStore {

    categories = undefined;
    isCategoriesLoading = false;

    categoryIndex = 0;

    productsByCategory = undefined;
    isProductsLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    setCategory = (index) => {
        this.categoryIndex = index;
    }

    loadCatigories = async () => {
        this.isCategoriesLoading = true;
        const response = await fetch('https://api.escuelajs.co/api/v1/categories')
        const json = await response.json()
        runInAction(() => {
            this.categories = [...json]
            this.isCategoriesLoading = false
        })
    }

    loadCategory = async (category) => {
        this.isProductsLoading = true
        const response = await fetch(` https://api.escuelajs.co/api/v1/categories/${category.id}/products`)
        const json = await response.json()
        runInAction(() => {
            this.productsByCategory = []
            for (let i = 8; i <= 23; i++) {
                this.productsByCategory.push(json[i])

            }
            // this.productsByCategory = [...json]
            this.isProductsLoading = false
        })
    }

}

const catalogStore = new CatalogStore();
export default catalogStore