import {getCompareProducts, setCompareProducts} from "./LocalStorage";

export const addCompareProduct = (id, props) => {
    const favProducts = getCompareProducts();
    const product = props.products.filter(el => el.id === id)
    if (favProducts.length > 0) {
        const productExist = favProducts.filter(el => el.id === id)
        if (productExist.length === 0)
            setCompareProducts([product[0], ...favProducts])
        else
            setCompareProducts(favProducts.filter(el => el.id !== id))
    } else {
        setCompareProducts([product[0], ...favProducts])
    }

}

export const existInCompareProducts = (id) => {
    return getCompareProducts().filter(el => el.id === id).length !== 0;
}

export const deleteCompareProduct = (id) => {
    setCompareProducts(getCompareProducts().filter(el => el.id !== id))
}