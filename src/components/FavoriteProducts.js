import React, {useEffect, useRef, useState} from "react";
import {getFavoritesProducts, setFavoritesProducts} from "../utils/LocalStorage";
import {Button, CloseButton} from "react-bootstrap";
import FavoriteProduct from "./FavoriteProduct";
import {deleteFavoriteProduct} from "../utils/FavoriteProductsFunctions";

function FavoriteProducts(props) {
    const [products, setProducts] = useState(getFavoritesProducts());
    const listFavoriteProducts = useRef()
    const [selectedArray, setSelectedArray] = useState([]);
    const [rerender, setRerender] = useState(true)

    const handleFavorites = () => {
        props.favHandle();
        setRerender(true);
    };
    const handleSelectAll = () => {
        products.forEach(el => {
            setSelectedArray([el.id, ...selectedArray]);
        });
        update();
        setRerender(true);
    }
    useEffect(() => {
        if(rerender){
            setProducts(getFavoritesProducts());
            setRerender(!rerender);
        }
    }, [rerender]);

    const handleDelete = () => {
        selectedArray.forEach(el => {
            deleteFavoriteProduct(el);
        });
        setProducts(getFavoritesProducts());
        setRerender(true);
        update();
    }

    const changeSelectedArray = (statusCheckbox, id) => {
        if (statusCheckbox) {
            setSelectedArray([id, ...selectedArray]);
        } else {
            setSelectedArray(selectedArray.filter(el => el !== id));
        }
        setRerender(true);
    }
    const clearFavoriteListProducts = () => {
        setFavoritesProducts([]);
        update();
        setRerender(true);
    }

    const update = () => {
        setProducts(getFavoritesProducts());
        props.update();
    }
    return (
        <div className="center">
            <div className="favoriteProducts">
                <div className="headerFavoriteProducts">
                    <div>
                        Список бажань
                    </div>
                    <div>
                        <CloseButton onClick={handleFavorites}/>
                    </div>
                </div>
                <div className="manageFavoriteProducts">
                    <div>
                        <Button variant="outline-success" onClick={handleSelectAll}>Select all</Button>{' '}
                        <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>{' '}
                    </div>
                    <div>
                        <Button variant="outline-dark" onClick={clearFavoriteListProducts}>Clear list</Button>{' '}
                    </div>
                </div>
                <div className="listFavoriteProducts" ref={listFavoriteProducts}>
                    <div className="products">
                        {products.length > 0 ? <ul>
                            {products.map(el => {
                                const existInSelected = selectedArray.filter(item => item === el.id);
                                if(existInSelected.length === 1){
                                    return (
                                        <FavoriteProduct id={el.id} key={el.id} title={el.title}
                                                         image={el.image} price={el.price} rate={el.rating.rate}
                                                         reviews={el.rating.count}
                                                         change={changeSelectedArray} selected={true}/>
                                    )
                                }else{
                                    return (
                                        <FavoriteProduct id={el.id} key={el.id} title={el.title}
                                                         image={el.image} price={el.price} rate={el.rating.rate}
                                                         reviews={el.rating.count}
                                                         change={changeSelectedArray} selected={false}/>
                                    )
                                }
                            })}
                        </ul> : 'Empty'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteProducts;