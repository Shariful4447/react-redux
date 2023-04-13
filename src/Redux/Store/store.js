import {legacy_createStore as createStore} from "redux"
import cartReducers from "../Reducers/cartReducers"
export const store = createStore(cartReducers);