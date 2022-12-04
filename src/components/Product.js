import React, {useRef} from "react";
import heart from "../images/heart.png";
import favorite from "../images/heart_added.png";
import compare from "../images/compare.png";
import compared from "../images/compare_added.png";
import cart from "../images/cart.png";
import cartFocus from "../images/cart_focus.png";
import {ratingSet} from "../utils/Others";
import {getFavoritesProducts} from "../utils/LocalStorage";
import {existInCompareProducts} from "../utils/CompareFunctions";

function Product(props) {
    //focus Cart
    const handleCartRef = useRef();
    const focusCart = () => {
        if (handleCartRef.current.src === cart)
            handleCartRef.current.src = cartFocus;
        else
            handleCartRef.current.src = cart;
    }
    const isFavorite = () => {
        return getFavoritesProducts().filter(el => el.id === props.id).length !== 0;
    }
    const handleFavorites = () => {
        props.addFavProduct(props.id);
        if(isFavorite())
            props.favoriteChange('Товар був доданий до улюблених', false);
        else
            props.favoriteChange('Товар був видалений улюблених', true);
    }

    const handleCompare = () => {
        props.compare(props.id, props.title)
        props.addCompareProduct(props.id)
    }
    return (
        <li>
            <div className="productBlock hoverProductBlock" key={props.id} onClick={focusCart}>
                <div className="productAction">
                    <div>
                        {isFavorite() ?
                            <div onClick={handleFavorites}>
                                <button>
                                    <img src={favorite} width={24} alt="Heart"/>
                                </button>
                            </div>
                            :
                            <div onClick={handleFavorites}>
                                <button>
                                    <img src={heart} width={24} alt="Heart"/>
                                </button>
                            </div>
                        }

                        <div onClick={handleCompare}>
                            <button>
                                {existInCompareProducts(props.id) ? <img src={compared} width={24} alt="Compare"/>:<img src={compare} width={24} alt="Compare"/>
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className="productImage">
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className="productTitle">
                    <p>{props.title}</p>
                </div>
                <div className="ratingReviews">
                    <div className="productRating">
                        <div className="rating-holder">
                            <div className="c-rating c-rating--small" data-rating-value={ratingSet(props.rate)}>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                            </div>
                        </div>
                    </div>
                    <div className="productReviews">
                        <p>{props.reviews} reviews</p>
                    </div>
                </div>
                <div className="priceAndCart">
                    <div className="productPrice">
                        <p>${props.price}</p>
                    </div>
                    <div className="productCart">
                        <button>
                            <img ref={handleCartRef} src={cart} alt="Cart" />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Product