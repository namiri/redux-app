import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    allProucts: productReducer
})

export default reducers