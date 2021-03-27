import React, { FC, useEffect, useState } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import Title from "../components/Title";
import PizzaItem from "../components/PizzaItem";
import { PizzaProps } from "../types";
import { getAllPizzas, getCurrentFilter, getFilters } from "../redux/selectors";
import { useDispatch } from "react-redux";
import { loadPizzasAsync, setCurrentFilter } from "../redux/actions/app";
import { connect } from "react-redux";

/*
  0 Install and setup redux
  1 load pizzas and put them in a redux state
  2 Move filters to redux state
  3 Add setActiveFilter and active filter to redux state and actions
  4 add reselect to fetch the requird data from redux store
  5 write selectors and reselect for filtering/sorting
  6 add Cart state to redux store and add actions to add items to cart
*/

// interface Props {
//   data: PizzaProps[];
// }

const sortItems: string[] = ["популярности", "цене", "алфавиту"];

const Main: FC = (props) => {
  console.log("пропсы с редакса", props);
  const dispatch = useDispatch();
  const [data, setData] = useState<null | []>(null);

  const fetchData = async () => {
    try {
      const result = await fetch("http://localhost:3000/db.json");
      const response = await result.json();
      setData(response.pizzas);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    loadPizzasAsync(dispatch);
  }, []);

  const doughTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];

  const items: string[] = [
    "Все",
    "Мясные",
    "Вегитарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories items={items} />
              <Sorting sortItems={sortItems} />
            </div>
            <Title />
            <div className="content__items">
              {data &&
                data.map(
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
                      doughTypes={doughTypes}
                      availableSizes={availableSizes}
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
    pizzas: getAllPizzas(state),
    filter: getCurrentFilter(state),
    filters: getFilters(state),
  };
};

export default connect(mapStateToProps)(Main);
