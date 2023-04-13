import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/cartActions";

const initalState = {
    cart: [],
    products: [{name: 'Asus Laptop', id:1},
    {name: 'Lenovo Laptop', id:2},
    {name: 'toshiba laptop', id:3},
    {name: 'apple Laptop', id:4}]
}

const cartReducers = (state = initalState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            const newId = action.id;
            const newCart = [...state.cart, newId];
            return {products:state.products, cart: newCart};
        
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.id !== id);
            return {cart: remainingCart}


        default:
            return state;
    }
}

export default cartReducers;