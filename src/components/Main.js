import React, {useEffect, useRef, useState} from "react";
import Header from "./Header";
import {fetchData, getMaxAndMinProducts} from "../utils/Others";
import ProductList from "./ProductList";
import Filter from "./Filter";
import {dataSort, filterByCategories, filterPrice} from "../utils/FilterFunstions";
import Sort from "./Sort";
import FavoriteProducts from "./FavoriteProducts";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';



function Main() {
    //states
    const [products, setProducts] = useState([]);
    const [range, setRange] = useState({});
    const [isPrice, setPrice] = useState(false);
    const [isCategory, setCategory] = useState(false);
    const [categories, setCategories] = useState([]);
    const [minMax, setMinMax] = useState({});
    const [isSort, setSort] = useState(false);
    const [sortMethod, setSortMethod] = useState('');
    const [showFavorites, setShowFavorites] = useState(false);
    const [update, setUpdate] = useState(false);

    //refs

    const favorites = useRef();
    const mainPage = useRef();


    //get

    const getProducts = async () => {
        let data;
        data = await fetchData('https://fakestoreapi.com/products');
        if (data){
            setMinMax(await getMaxAndMinProducts(data));
            if (sortMethod !== '')
                data = dataSort(data, sortMethod);
            if (range.min && range.max)
                data = filterPrice(data, range.min, range.max);
            if(categories.length !== 0){
                data = filterByCategories(data, categories);
            }
            setProducts(data);
            setSort(false);
            setCategory(false);
            setPrice(false);
        }
    }

    //useEffects

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if( isSort || isPrice || isCategory){
            getProducts();
        }
    }, [ isSort, isPrice, isCategory]);

    useEffect(() => {
        handleFavorites()
    }, [showFavorites]);

    //functions

    const filterByPrice = (r) => {
        setRange(r);
        setPrice(true);
    }

    const filterByCategory = (categoryArray) => {
        setCategories(categoryArray);
        setCategory(true);
    }
    const sortData = (sortMethod) => {
        setSortMethod(sortMethod);
        setSort(true);
    }

    const sortData = (sortMethod) => {
        setSortMethod(sortMethod);
        setSort(true);
    }

    const showOrHideFavoritesProducts = () => {
        setShowFavorites(!showFavorites);
    }

    const handleFavorites = () => {
        if (showFavorites) {
            favorites.current.children[0].children[0].style.display = 'block';
            disableBodyScroll(mainPage.current);
            mainPage.current.classList.add('blackout')
            favorites.current.children[0].children[0].style.backgroundColor = 'white'
        } else {
            if(favorites.current){
                favorites.current.children[0].children[0].style.display = 'none'
            }
            mainPage.current.classList.remove('blackout')
            enableBodyScroll(mainPage.current);
        }
    }
    const updateAllComponents = () => {
        setUpdate(!update);
    }

    return (
        <div  ref={mainPage}>
            <Header favHandle={showOrHideFavoritesProducts}/>
            {showFavorites &&  <div ref={favorites}>
                <FavoriteProducts favHandle={showOrHideFavoritesProducts} update={updateAllComponents} updateComponent={update}/>
            </div>}

            <div className="App">
                <div>
                    <div className="main">
                        <Filter minMax={minMax} filterPrice={filterByPrice} filterCategories={filterByCategory}/>
                        <div>
                            <Sort sortData={sortData}/>
                            <ProductList products={products} update={updateAllComponents}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main