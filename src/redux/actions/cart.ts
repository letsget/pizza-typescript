import { PizzaProps, PizzaInCartProps } from "../../types";
export const LOAD_CART_PRODUCTS = "LOAD_CART_PRODUCTS";
export const LOAD_CART_FROM_LOCAL_STORAGE = "LOAD_CART_FROM_LOCAL_STORAGE";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_EXISTING_ITEM = "ADD_EXISTING_ITEM";
export const HANDLE_INCREMENT = "HANDLE_INCREMENT";
export const HANDLE_DECREMENT = "HANDLE_DECREMENT";
export const GET_ORDER_PRICE = "GET_ORDER_PRICE";
export const GET_ORDER_LENGTH = "GET_ORDER_LENGTH";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

export const loadCartProducts = (cart: any[]) => ({
  type: LOAD_CART_PRODUCTS,
  payload: cart,
});

export const loadFromLocalStorage = (cart: any) => ({
  type: LOAD_CART_FROM_LOCAL_STORAGE,
  payload: cart,
});

export const addToCart = (
  type: string,
  size: number,
  price: number,
  img: string,
  name: string,
  options: any[]
) => ({
  type: ADD_TO_CART,
  payload: { type, size, price, img, name, options },
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

export const getOrderPrice = (totalPrice: number) => ({
  type: GET_ORDER_PRICE,
  payload: totalPrice,
});

export const getOrderLength = (len: number) => ({
  type: GET_ORDER_LENGTH,
  payload: len,
});

export const removeFromCart = (index: number) => ({
  type: REMOVE_FROM_CART,
  payload: index,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const loadFromLocalStorageAsync = async (
  dispatch: Function
): Promise<any> => {
  try {
    const serializedState = localStorage.getItem("cart2");
    if (serializedState === null) {
      return undefined;
    }
    const storedCart = JSON.parse(serializedState);
    dispatch(loadFromLocalStorage(storedCart));
  } catch (err) {
    return undefined;
  }
};
