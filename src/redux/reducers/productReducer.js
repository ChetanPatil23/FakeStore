import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [{ id: 1, title: "Title here", desc: "Description here" }],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return state;

    default:
      return state;
  }
};
