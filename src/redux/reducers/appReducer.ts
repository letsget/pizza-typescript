import {
  LOAD_PIZZAS,
  SET_CURRENT_FILTER,
  SET_CURRENT_SORTING_OPTION,
} from "../actions/app";
import { PizzaProps } from "../../types";

interface IActionTypes {
  type: string;
  payload: PizzaProps[] | string;
}

export interface IInitialStateTypes {
  pizzas: PizzaProps[];
  filters: {
    [key: string]: string;
  };
  currentFilter: string;
  sortingOptions: {
    [key: string]: string;
  };
  currentSortingOption: string;
}

const initialState: IInitialStateTypes = {
  pizzas: [],
  filters: {
    all: "Все",
    meat: "Мясные",
    vegi: "Вегитарианские",
    chicken: "С курицей",
    fish: "С рыбой",
    spicy: "Острые",
  },
  currentFilter: "all",
  sortingOptions: {
    default: "популярности",
    asc: "сначала дешевые",
    desc: "сначала дорогие",
    alph: "алфавиту",
  },
  currentSortingOption: "default",
};

const appReducer = (state = initialState, { type, payload }: IActionTypes) => {
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
    case SET_CURRENT_SORTING_OPTION:
      console.log("sorting option ", payload);
      return {
        ...state,
        currentSortingOption: payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export { appReducer };
