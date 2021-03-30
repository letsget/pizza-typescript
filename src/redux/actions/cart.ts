import { PizzaProps, PizzaInCartProps } from "../../types";
export const LOAD_CART_PRODUCTS = "LOAD_CART_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
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
  quantity: number,
  price: number,
  img: string,
  name: string
) => ({
  type: ADD_TO_CART,
  payload: { type, size, quantity, price, img, name },
});

export const handleIncrement = (quantity: number) => ({
  type: ADD_TO_CART,
  payload: quantity,
});

export const handleDecrement = (quantity: number) => ({
  type: ADD_TO_CART,
  payload: quantity,
});

export const removeFromCart = (item: PizzaProps) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const clearCart = (cart: PizzaProps[]) => ({
  type: ADD_TO_CART,
  payload: cart,
});
