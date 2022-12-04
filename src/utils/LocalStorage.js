//get products from Local Storage
export function getProducts(){
    if (localStorage.getItem('products'))
        return JSON.parse(localStorage.getItem('products'))
    else
        return [];
}

export async function setProducts(products){
    await localStorage.setItem('products', JSON.stringify(products))
}