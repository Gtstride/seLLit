import ShopActionTypes from "./ShopType";

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLLECTIONS,
  payload: collectionsMap
});
