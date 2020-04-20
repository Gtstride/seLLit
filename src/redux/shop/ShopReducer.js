
import ShopActionTypes from "./ShopType";

const INITAL_STATE = {
  collections: null
};

const shopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
