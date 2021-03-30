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
} from "../redux/selectors";
import { useDispatch } from "react-redux";
import { loadPizzasAsync, setCurrentFilter } from "../redux/actions/app";
import { connect } from "react-redux";

/*
  0 Install and setup redux                                                 [✓]
  1 load pizzas and put them in a redux state                               [✓]
  2 Move filters to redux state                                             [✓]
  3 Add setActiveFilter and active filter to redux state and actions        [✓]
  4 add reselect to fetch the requird data from redux store                 [✓]
  5 write selectors and reselect for filtering/sorting                      [✓]  
  8 fix filtering options - create an object of filters in store            [✓]
  
  9 modify the json file to include object with prices based on types       [✓]

  10 add Cart state to redux store and add actions to add items to cart     [✓]

  11 use classNames library for generating classes dynamically
  
  12 Load products in cart when a user enters the cart page

  13 add remove option

  14 add clear cart option 



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
}

const Main: FC<Props> = ({
  pizzas,
  filter,
  filters,
  sortingOptions,
  currentSortingOption,
  sortedPizzas,
  cart,
  orderNumber,
}) => {
  console.log("cart", cart);
  console.log("order number", orderNumber);

  const dispatch = useDispatch();

  useEffect(() => {
    loadPizzasAsync(dispatch);
  }, []);

  const onFilter = (name: string) => dispatch(setCurrentFilter(name));

  return (
    <>
      <div className="wrapper">
        <Header />
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
                  ({
                    id,
                    imageUrl,
                    name,
                    types,
                    sizes,
                    price,
                    category,
                    rating,
                  }: PizzaProps) => (
                    <PizzaItem
                      key={id}
                      imageUrl={imageUrl}
                      name={name}
                      types={types}
                      sizes={sizes}
                      price={price}
                      category={category}
                      rating={rating}
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
  };
};

export default connect(mapStateToProps)(Main);
