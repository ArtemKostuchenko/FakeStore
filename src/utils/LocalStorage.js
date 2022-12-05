//get and set products from Local Storage
export function getProducts(){
    if (localStorage.getItem('products'))
        return JSON.parse(localStorage.getItem('products'))
    else
        return [];
}

export async function setProducts(products){
    await localStorage.setItem('products', JSON.stringify(products))
}

//get and set favoriteProducts from Local Storage
export function getFavoritesProducts ()  {
    return  getDataFromLocalStorage('favorites')
}

function getDataFromLocalStorage(key){
    if (localStorage.getItem(key))
        return JSON.parse(localStorage.getItem(key))
    else
        return [];
}

export function setFavoritesProducts(products) {
    localStorage.setItem('favorites', JSON.stringify(products))
}

//get and set compareProducts from Local Storage
export function setCompareProducts(products) {
    localStorage.setItem('compare', JSON.stringify(products))
}

export function getCompareProducts ()  {
    return  getDataFromLocalStorage('compare')
}