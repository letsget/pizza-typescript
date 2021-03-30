import { PizzaInCartProps } from "../../types";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/cart";

interface IInitialStateTypes {
  productsInCart: PizzaInCartProps[];
  orderNumber: number;
  orderPriceTotal: number;
}

const initialState: IInitialStateTypes = {
  productsInCart: [],
  orderNumber: 0,
  orderPriceTotal: 0,
};

const cartReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ADD_TO_CART:
      console.log("adding to cart!!!", payload);
      return {
        ...state,
        productsInCart: state.productsInCart.concat({
          id: Math.random(),
          imageUrl: payload.img,
          name: payload.name,
          type: payload.type,
          size: payload.size,
          quantity: payload.quantity,
          pizzaPrice: payload.price,
        }),
      };
    case REMOVE_FROM_CART:
      const copy = [...state.productsInCart];
      copy.splice(payload, 1);
      return {
        ...state,
        productsInCart: copy,
      };
    case CLEAR_CART:
      return {
        ...state,
        productsInCart: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export { cartReducer };
