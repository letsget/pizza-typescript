export const LOAD_PIZZAS = "LOAD_PIZZAS";
export const SET_CURRENT_FILTER = "SET_CURRENT_FILTER";

export const loadPizzas = (pizzas: any) => ({
  type: LOAD_PIZZAS,
  payload: pizzas,
});

export const setCurrentFilter = (filter: string) => ({
  type: SET_CURRENT_FILTER,
  payload: filter,
});

export const loadPizzasAsync = async (dispatch: Function) => {
  try {
    const result = await fetch("http://localhost:3000/db.json");
    const { pizzas } = await result.json();
    console.log("response", pizzas);
    dispatch(loadPizzas(pizzas));
  } catch (err) {
    console.log(err?.message || err?.response || err);
  }
};