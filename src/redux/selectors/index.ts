import { createSelector } from "reselect";
import { PizzaProps } from "../../types";

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
