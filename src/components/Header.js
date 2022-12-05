import React from "react";
import compare from "../images/compare-header.png";
import heart from "../images/heart-header.png";
import cart from "../images/cart-header.png";
import Counter from "./Counter";
import {getCompareProducts, getFavoritesProducts} from "../utils/LocalStorage";


function Header(props) {
    const handleFavorites = () => props.favHandle();
    const countFavProducts = getFavoritesProducts().length
    const countCompareProducts = getCompareProducts().length
    return (
        <header>
            <div className="brand">FakeStore</div>
            <div className="navigation">
                <div>
                    <button>
                        <img src={compare} width={30} alt="Compare"/>
                        {countCompareProducts !== 0 ? <Counter count={countCompareProducts}/> : ''}
                    </button>
                </div>
                <div>
                    <button  onClick={handleFavorites}>
                        <img src={heart} width={30} alt="Heart"/>
                        {countFavProducts !== 0 ? <Counter count={countFavProducts}/> : ''}
                    </button>
                </div>
                <div>
                    <button>
                        <img src={cart} alt="Cart" width={30}/>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;