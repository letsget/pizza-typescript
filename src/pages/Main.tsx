import React, { FC, useEffect, useState } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import Title from "../components/Title";
import PizzaItem from "../components/PizzaItem";
import { PizzaProps, PizzaInCartProps } from "../types";
import {
  getCurrentFilter,
  getFilters,
  pizzasToRender,
  getSortingOptions,
  getCurrentSortingOption,
  sortedPizzas,
  getCart,
  getOrderNumber,
  getTotalOrderPrice,
} from "../redux/selectors";
import { useDispatch } from "react-redux";
import { loadPizzasAsync, setCurrentFilter } from "../redux/actions/app";
import { connect } from "react-redux";

/*
   Install and setup redux                                                 [✓]
   load pizzas and put them in a redux state                               [✓]
   Move filters to redux state                                             [✓]
   Add setActiveFilter and active filter to redux state and actions        [✓]
   add reselect to fetch the requird data from redux store                 [✓]
   write selectors and reselect for filtering/sorting                      [✓]  
   fix filtering options - create an object of filters in store            [✓]
  
   modify the json file to include object with prices based on types       [✓]

   add Cart state to redux store and add actions to add items to cart      [✓]

   use classNames library for generating classes dynamically
  
   Load products in cart when a user enters the cart page                  [✓]

   add remove option                                                       [✓]

   add clear cart option                                                   [✓]

   use dynamic rendering and redirect user to empty cart page if there     [✓]
   are no products in the cart

   add increment/decrement products in cart property in cart               [✓]
*/

interface Props {
  pizzas: PizzaProps[];
  filter: string;
  filters: any;
  sortingOptions: {
    [key: string]: string;
  };
  currentSortingOption: string;
  sortedPizzas: PizzaProps;
  cart: PizzaInCartProps;
  orderNumber: number;
  orderPrice: number;
}

const Main: FC<Props> = ({
  pizzas,
  filter,
  filters,
  sortingOptions,
  currentSortingOption,
  cart,
  orderNumber,
  orderPrice,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadPizzasAsync(dispatch);
  }, []);

  console.log("pizzas", pizzas);

  const onFilter = (name: string) => dispatch(setCurrentFilter(name));

  return (
    <>
      <div className="wrapper">
        <Header orderPrice={orderPrice} />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories items={filters} onFilter={onFilter} filter={filter} />
              <Sorting
                sortItems={sortingOptions}
                currentSortingOption={currentSortingOption}
              />
            </div>
            <Title filter={filter} />
            <div className="content__items">
              {pizzas &&
                pizzas.map(
                  (
                    {
                      id,
                      imageUrl,
                      name,
                      types,
                      sizes,
                      price,
                      category,
                      rating,
                      extras,
                    }: PizzaProps,
                    index: number
                  ) => (
                    <PizzaItem
                      key={id}
                      imageUrl={imageUrl}
                      name={name}
                      types={types}
                      sizes={sizes}
                      price={price}
                      category={category}
                      rating={rating}
                      extras={extras}
                      orderNumber={orderNumber}
                      orderPrice={orderPrice}
                    />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    sortedPizzas: sortedPizzas(state),
    filter: getCurrentFilter(state),
    filters: getFilters(state),
    sortingOptions: getSortingOptions(state),
    currentSortingOption: getCurrentSortingOption(state),
    pizzas:
      getCurrentSortingOption(state) === "default"
        ? pizzasToRender(state)
        : sortedPizzas(state),
    cart: getCart(state),
    orderNumber: getOrderNumber(state),
    orderPrice: getTotalOrderPrice(state),
  };
};

export default connect(mapStateToProps)(Main);
