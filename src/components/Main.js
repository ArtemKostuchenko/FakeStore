import React, {useEffect, useState} from "react";
import Header from "./Header";
import {fetchData, getMaxAndMinProducts} from "../utils/Others";
import ProductList from "./ProductList";
import Filter from "./Filter";
import {filterByCategories, filterPrice} from "../utils/FilterFunstions";


function Main() {
    //states
    const [products, setProducts] = useState([]);
    const [range, setRange] = useState({});
    const [isPrice, setPrice] = useState(false);
    const [isCategory, setCategory] = useState(false);
    const [categories, setCategories] = useState([]);
    const [minMax, setMinMax] = useState({});

    //get

    const getProducts = async () => {
        let data;
        data = await fetchData('https://fakestoreapi.com/products');
        if (data){
            setMinMax(await getMaxAndMinProducts(data));

            if (range.min && range.max)
                data = filterPrice(data, range.min, range.max);
            if(categories.length !== 0){
                data = filterByCategories(data, categories);
            }
            setProducts(data);
            setCategory(false);
            setPrice(false);
        }
    }

    //useEffects

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if( isPrice || isCategory){
            getProducts();
        }
    }, [ isPrice, isCategory]);

    //functions

    const filterByPrice = (r) => {
        setRange(r);
        setPrice(true);
    }
    const filterByCategory = (categoryArray) => {
        setCategories(categoryArray);
        setCategory(true);
    }

    return (
        <div>
            <Header/>
            <div className="App">
                <div>
                    <div className="main">
                        <Filter minMax={minMax} filterPrice={filterByPrice} filterCategories={filterByCategory}/>
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