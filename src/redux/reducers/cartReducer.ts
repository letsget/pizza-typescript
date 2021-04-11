import { PizzaInCartProps } from "../../types";
import {
  LOAD_CART_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  ADD_EXISTING_ITEM,
  HANDLE_INCREMENT,
  HANDLE_DECREMENT,
  LOAD_CART_FROM_LOCAL_STORAGE,
} from "../actions/cart";

interface IInitialStateTypes {
  productsInCart: any[];
}

const initialState: IInitialStateTypes = {
  productsInCart: [],
};

const cartReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOAD_CART_PRODUCTS:
      return {
        ...state,
        productsInCart: payload,
      };
    case LOAD_CART_FROM_LOCAL_STORAGE:
      return {
        ...state,
        productsInCart: payload,
      };
    case ADD_TO_CART:
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
          totalPrice: payload.price,
          options: payload.options,
        }),
      };
    case ADD_EXISTING_ITEM:
      const { index, price } = payload;
      const updated = [...state.productsInCart];
      updated[index].quantity = updated[index].quantity + 1;
      updated[index].totalPrice = updated[index].totalPrice + price;
      return {
        ...state,
        productsInCart: updated,
      };
    case HANDLE_INCREMENT:
      console.log(payload);
      const incremented = [...state.productsInCart];
      incremented[payload.index].quantity += 1;
      incremented[payload.index].totalPrice += payload.price;
      return {
        ...state,
        productsInCart: incremented,
      };
    case HANDLE_DECREMENT:
      console.log(payload);
      const decremented = [...state.productsInCart];
      if (decremented[payload.index].quantity > 1) {
        decremented[payload.index].quantity -= 1;
        decremented[payload.index].totalPrice -= payload.price;
      }
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
