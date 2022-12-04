import React from "react";
import compare from "../images/compare-header.png";
import heart from "../images/heart-header.png";
import cart from "../images/cart-header.png";


function Header(props) {
    const handleFavorites = () => props.favHandle();
    return (
        <header>
            <div className="brand">FakeStore</div>
            <div className="navigation">
                <div>
                    <button>
                        <img src={compare} width={30} alt="Compare"/>
                    </button>
                </div>
                <div>
                    <button  onClick={handleFavorites}>
                        <img src={heart} width={30} alt="Heart"/>
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