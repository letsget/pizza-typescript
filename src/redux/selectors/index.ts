import { createSelector } from "reselect";

export const getAllPizzas = ({ app }: any) => app.pizzas;

export const getCurrentFilter = ({ app }: any) => app.currentFilter;

export const getFilters = ({ app }: any) => app.filters;

export const pizzasToRender = createSelector(
  [getCurrentFilter, getAllPizzas],
  (filter, pizzas) => {
    if (filter === "Мясные") {
      return pizzas.filter((pizza: any) => pizza.category === "мясные");
    } else if (filter === "Вегитарианские") {
      return pizzas.filter((pizza: any) => pizza.category === "вегитарианские");
    } else if (filter === "С курицей") {
      return pizzas.filter((pizza: any) => pizza.category === "c курицей");
    } else if (filter === "Острые") {
      return pizzas.filter((pizza: any) => pizza.category === "острая");
    } else if (filter === "С рыбой") {
      return pizzas.filter((pizza: any) => pizza.category === "с рыбой");
    } else {
      return pizzas;
    }
  }
);

// "Все",
// "Мясные",
// "Вегитарианские",
// "С курицей",
// "С рыбой",
// "Острые",
