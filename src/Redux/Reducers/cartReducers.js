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
            const newItem = {
                productId: action.id, 
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};
        
        case REMOVE_FROM_CART:
            const cartId=action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return {...state, cart: remainingCart}


        default:
            return state;
    }
}

export default cartReducers;