import { createSelector } from "reselect";
import { PizzaProps, PizzaInCartProps } from "../../types";

export const getSortingOptions = ({ app }: any) => app.sortingOptions;

export const getCurrentSortingOption = ({ app }: any) =>
  app.currentSortingOption;

export const getAllPizzas = ({ app }: any) => app.pizzas;

export const getCurrentFilter = ({ app }: any) => app.currentFilter;

export const getFilters = ({ app }: any) => app.filters;

export const getCart = ({ cart }: any) => cart.productsInCart;

export const getOrderNumber = ({ cart }: any) => cart.productsInCart.length;

export const getOrderPrice = ({ cart }: any) =>
  cart.productsInCart.reduce(
    (acc: number, curr: PizzaInCartProps) =>
      acc + curr.pizzaPrice * curr.quantity,
    0
  );

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
    if (option === "default") {
      return pizzas;
    } else if (option === "asc") {
      return [...pizzas].sort(
        (a: PizzaProps, b: PizzaProps) => a.price[0] - b.price[0]
      );
    } else if (option === "desc") {
      return [...pizzas].sort((a, b) => b.price[0] - a.price[0]);
    } else if (option === "alph") {
      return [...pizzas].sort((a, b) => (a.name > b.name ? 1 : -1));
    }
  }
);
