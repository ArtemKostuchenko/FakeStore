import {getProducts, setProducts} from "./LocalStorage";

//get products
export const fetchData = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        if(response.ok){
            await setProducts(data);
        }else{
            return getProducts();
        }
        return data;
    }catch (e) {
        return getProducts();
    }
}


//rating configuration
export const ratingSet = (rate) => {
    let str = rate.toString()
    let splitNumber = str.split('.');
    let rateStr = splitNumber[0]
    if (2.5 >= parseInt(splitNumber[1]) >= 1 || parseInt(splitNumber[1]) > 1 && parseInt(splitNumber[1]) <= 2.5) {
        rateStr += '.25'
    } else if (parseInt(splitNumber[1]) > 2.5 && parseInt(splitNumber[1]) <= 5) {
        rateStr += '.5'
    } else if (parseInt(splitNumber[1]) > 5 && parseInt(splitNumber[1]) <= 7.5) {
        rateStr += '.75'
    } else {
        rateStr = Math.round(rate).toString()
    }
    return rateStr
}


//getting min and max price of products

export const getMaxAndMinProducts = async(products) => {
    let min = Infinity;
    let max = -Infinity;
    products.forEach(el => {
        if(el.price < min){
            min = el.price;
        }
    })
    products.forEach(el => {
        if(el.price > max){
            max = el.price;
        }
    })
    return {min, max}
}