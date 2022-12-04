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