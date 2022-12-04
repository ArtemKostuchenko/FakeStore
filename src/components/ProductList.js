import React from "react";
import Product from "./Product";


function ProductList(props) {
    return (
        <div className="products">
            <ul>
                {props.products.map(el => <Product key={el.id} id={el.id} title={el.title} image={el.image} price={el.price}
                                                   rate={el.rating.rate} reviews={el.rating.count}/>)}
            </ul>
        </div>
    )
}

export default ProductList