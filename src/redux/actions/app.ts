import { PizzaProps } from "../../types";
export const LOAD_PIZZAS = "LOAD_PIZZAS";
export const SET_CURRENT_FILTER = "SET_CURRENT_FILTER";
export const SET_CURRENT_SORTING_OPTION = "SET_CURRENT_SORTING_OPTION";

export const loadPizzas = (pizzas: PizzaProps) => ({
  type: LOAD_PIZZAS,
  payload: pizzas,
});

export const setCurrentFilter = (filter: string) => ({
  type: SET_CURRENT_FILTER,
  payload: filter,
});

export const setCurrentSortingOption = (option: string) => ({
  type: SET_CURRENT_SORTING_OPTION,
  payload: option,
});

export const loadPizzasAsync = async (dispatch: Function): Promise<any> => {
  try {
    const result = await fetch(
      "http://localhost:3000/pizza-typescript/db.json"
    );
    const { pizzas } = await result.json();
    dispatch(loadPizzas(pizzas));
  } catch (err) {
    console.log(err?.message || err?.response || err);
  }
};
