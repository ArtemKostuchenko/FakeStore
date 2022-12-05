import {getFavoritesProducts, setFavoritesProducts} from "./LocalStorage";

export const addFavoriteProduct = (id, props) => {
    const favProducts = getFavoritesProducts();
    const product = props.products.filter(el => el.id === id)
    if (favProducts.length > 0) {
        const productExist = favProducts.filter(el => el.id === id)
        console.log(productExist)
        if (productExist.length === 0)
            setFavoritesProducts([product[0], ...favProducts])
        else
            setFavoritesProducts(favProducts.filter(el => el.id !== id))
    } else {
        setFavoritesProducts([product[0], ...favProducts])
    }

}
export const deleteFavoriteProduct = (id) => {
    setFavoritesProducts(getFavoritesProducts().filter(el => el.id !== id))
}