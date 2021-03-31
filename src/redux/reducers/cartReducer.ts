import { PizzaInCartProps } from "../../types";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  ADD_EXISTING_ITEM,
  HANDLE_INCREMENT,
  HANDLE_DECREMENT,
} from "../actions/cart";

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
          quantity: 1,
          pizzaPrice: payload.price,
        }),
      };
    case ADD_EXISTING_ITEM:
      const { index, price } = payload;
      const updated = [...state.productsInCart];
      updated[index].quantity = updated[index].quantity + 1;
      updated[index].pizzaPrice = updated[index].pizzaPrice + price;
      return {
        ...state,
        productsInCart: updated,
      };
    case HANDLE_INCREMENT:
      const incremented = [...state.productsInCart];
      incremented[payload].quantity += 1;
      return {
        ...state,
        productsInCart: incremented,
      };
    case HANDLE_DECREMENT:
      const decremented = [...state.productsInCart];
      decremented[payload].quantity > 1 && (decremented[payload].quantity -= 1);
      return {
        ...state,
        productsInCart: decremented,
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
