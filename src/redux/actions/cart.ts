import { PizzaProps, PizzaInCartProps } from "../../types";
export const LOAD_CART_PRODUCTS = "LOAD_CART_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_EXISTING_ITEM = "ADD_EXISTING_ITEM";
export const HANDLE_INCREMENT = "HANDLE_INCREMENT";
export const HANDLE_DECREMENT = "HANDLE_DECREMENT";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
// id: Math.random(),
// imageUrl: "none",
// name: "test",
// type: payload.activeType,
// size: payload.activeSize,
// quantity: payload.count,
// pizzaPrice: payload.finalPrice,

export const loadCardProducts = (cart: PizzaInCartProps) => ({
  type: LOAD_CART_PRODUCTS,
  payload: cart,
});

export const addToCart = (
  type: string,
  size: number,
  price: number,
  img: string,
  name: string
) => ({
  type: ADD_TO_CART,
  payload: { type, size, price, img, name },
});

export const addExistingItem = (index: number, price: number) => ({
  type: ADD_EXISTING_ITEM,
  payload: { index, price },
});

export const handleIncrement = (index: number, price: number) => ({
  type: HANDLE_INCREMENT,
  payload: { index, price },
});

export const handleDecrement = (index: number, price: number) => ({
  type: HANDLE_DECREMENT,
  payload: { index, price },
});

export const removeFromCart = (index: number) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
