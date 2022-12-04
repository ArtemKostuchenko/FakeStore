import React, {useEffect, useState} from "react";
import Header from "./Header";
import {fetchData} from "../utils/Others";


function Main() {
    //states
    const [products, setProducts] = useState([]);


    //get

    const getProducts = async () => {
        let data;
        data = await fetchData('https://fakestoreapi.com/products');
        if (data){
            setProducts(data);
        }
    }

    //useEffects

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div>
            <Header/>

        </div>
    )
}

export default Main