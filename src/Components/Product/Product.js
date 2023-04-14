import React from 'react';

const Product = (props) => {

    const {addToCart, product} = props;
    
    return (
        <div style={{border: '1px solid tomato'}}>
            <h4>{product.name}</h4>
            <button onClick={()=>addToCart(product.id, product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;