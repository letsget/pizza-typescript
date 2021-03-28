import { createSelector } from "reselect";
import { PizzaProps } from "../../types";

export const getSortingOptions = ({ app }: any) => app.sortingOptions;

export const getCurrentSortingOption = ({ app }: any) =>
  app.currentSortingOption;

export const getAllPizzas = ({ app }: any) => app.pizzas;

export const getCurrentFilter = ({ app }: any) => app.currentFilter;

export const getFilters = ({ app }: any) => app.filters;

export const pizzasToRender = createSelector(
  [getCurrentFilter, getAllPizzas, getFilters],
  (filter, pizzas, filters) => {
    if (filter === "all") {
      return pizzas;
    } else {
      return pizzas.filter(
        (pizza: PizzaProps) =>
          pizza.category.toLowerCase() === filters[filter].toLowerCase()
      );
    }
  }
);

export const sortedPizzas = createSelector(
  [getCurrentSortingOption, pizzasToRender],
  (option, pizzas) => {
    if (option === "популярности") {
      return pizzas;
    } else if (option === "цене") {
      return [...pizzas].sort(
        (a: PizzaProps, b: PizzaProps) => a.price - b.price
      );
    }
  }
);
