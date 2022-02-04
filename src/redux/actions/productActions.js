import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products,
  };
};

export const setSelectedProduct = (product) => {
  return {
    type: ActionTypes.SET_SELECTED_PRODUCT,
    payload: product,
  };
};
