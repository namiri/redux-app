import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
    // {id: 1,totle:'test',category:'a' }
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
        console.log('r',payload)
      return { ...state, products: payload };

    default:
      return state;
  }
};
