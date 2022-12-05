import React, {useEffect, useState} from "react";
import Product from "./Product";
import {addFavoriteProduct} from "../utils/FavoriteProductsFunctions";
import Notification from "./Notification";
import {addCompareProduct as add, existInCompareProducts} from "../utils/CompareFunctions";

function ProductList(props) {
    const [notification, setNotification] = useState(false);
    const [text, setText] = useState('Товар доданий до порівнянь');
    const [backgroundColor, setBackgroundColor] = useState('lightgreen');
    const [border, setBorder] = useState('lightgreen');
    const addFavProduct = (id) => {
        addFavoriteProduct(id, props);
        props.update();
    }
    const addCompareProduct = (id) => {
        add(id, props);
        props.update();
    }
    useEffect(() => {
        if (notification)
            setTimeout(() => {
                setNotification(false);
            }, 2000);
    }, [notification])
    const handleCompare = (id, title) => {
        if (existInCompareProducts(id)) {
            setText(`Товар ${title} видалений з порівнянь`)
            setBackgroundColor('indianred')
            setBorder('red')
        } else {
            setText(`Товар ${title} доданий до порівнянь`)
            setBackgroundColor('lightgreen')
            setBorder('green')
        }
        setNotification(true);
    }
    const handleFavoriteChange = (text, isFavorite) => {
        setText(text)
        if (isFavorite) {
            setBackgroundColor('indianred')
            setBorder('red')
        } else {
            setBackgroundColor('lightgreen')
            setBorder('green')
        }
        setNotification(true);
    }
    return (
        <div className="products">
            <ul>
                {props.products.map(el => <Product key={el.id} id={el.id} title={el.title} image={el.image}
                                                   price={el.price}
                                                   rate={el.rating.rate} reviews={el.rating.count}
                                                   addFavProduct={addFavProduct} addCompareProduct={addCompareProduct}
                                                   compare={handleCompare} favoriteChange={handleFavoriteChange}/>)}
            </ul>
            <Notification show={notification} text={text} backgroundColor={backgroundColor}
                          borderColor={border}/>
        </div>
    )
}

export default ProductList