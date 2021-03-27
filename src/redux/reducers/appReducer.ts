import { LOAD_PIZZAS, SET_CURRENT_FILTER } from "../actions/app";

const initialState = {
  pizzas: [],
  currentFilter: "Все",
  filters: ["Все", "Мясные", "Вегитарианские", "Гриль", "Острые", "Закрытые"],
};

const appReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case LOAD_PIZZAS:
      return {
        ...state,
        pizzas: payload,
      };
    case SET_CURRENT_FILTER:
      console.log("filter from set", payload);
      return {
        ...state,
        currentFilter: payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export { appReducer };
