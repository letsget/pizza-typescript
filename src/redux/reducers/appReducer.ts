import { LOAD_PIZZAS, SET_CURRENT_FILTER } from "../actions/app";
import { PizzaProps } from "../../types";

interface IActionTypes {
  type: string;
  payload: PizzaProps[] | string;
}

interface IInitialStateTypes {
  pizzas: PizzaProps[];
  filters: {
    [key: string]: string;
  };
  currentFilter: string;
  sortingOptions: string[];
  currentSortingOption: string;
}

// interface IFilters {
//   all: string,
//   meat: string,
//   vegi: string,
//   chicken: string,
//   fish: string,
//   spicy: string,
// }

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
  sortingOptions: ["популярности", "цене", "алфавиту"],
  currentSortingOption: "популярности",
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
    default: {
      return {
        ...state,
      };
    }
  }
};

export { appReducer };
