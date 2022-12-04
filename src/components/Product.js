import React, {useRef} from "react";
import heart from "../images/heart.png";
import compare from "../images/compare.png";
import cart from "../images/cart.png";
import cartFocus from "../images/cart_focus.png";
import {ratingSet} from "../utils/Others";

function Product(props) {
    //focus Cart
    const handleCartRef = useRef();
    const focusCart = () => {
        if (handleCartRef.current.src === cart)
            handleCartRef.current.src = cartFocus;
        else
            handleCartRef.current.src = cart;
    }
    return (
        <li>
            <div className="productBlock hoverProductBlock" key={props.id} onClick={focusCart}>
                <div className="productAction">
                    <div>
                        <div>
                            <button>
                                <img src={heart} width={24} alt="Heart"/>
                            </button>
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
                            <img ref={handleCartRef} src={cart} alt="Cart" />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Product