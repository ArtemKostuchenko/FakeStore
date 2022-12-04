import compare from "../images/compare.png";
import cart from "../images/cart.png";
import React from "react";
import {ratingSet} from "../utils/Others";

export default function FavoriteProduct(props) {
    const handleChecked = (e) => {
        props.change(e.target.checked, props.id)
    }
    return (
        <li>
            <div className="productBlock" key={props.id}>
                <div className="productAction">
                    <div>
                        <div className={"checkboxFavorite"}>
                            <input type={"checkbox"} onChange={handleChecked} checked={props.selected}/>
                        </div>
                        <div>
                            <button>
                                <img src={compare} width={24} alt="Compare"/>
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
                            <img src={cart} alt="Cart"/>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}