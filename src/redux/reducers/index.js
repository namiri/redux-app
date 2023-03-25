import { combineReducers } from "redux";
import { productReducer, selctedProReducer } from "./productReducer";

const reducers = combineReducers({
    allProucts: productReducer,
    product: selctedProReducer
})

export default reducers