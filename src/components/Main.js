import React, {useEffect, useState} from "react";
import Header from "./Header";
import {fetchData} from "../utils/Others";
import ProductList from "./ProductList";


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

    useEffect(() => getProducts(), []);

    return (
        <div>
            <Header/>
            <div className="App">
                <div>
                    <div className="main">
                        <div>
                            <ProductList products={products}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main