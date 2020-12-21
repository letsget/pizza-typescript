import React, { FC } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import Title from "../components/Title";
import PizzaItem from "../components/PizzaItem";

const pizzas = new Array(10).fill(<PizzaItem />);

const items: string[] = [
  "Все",
  "Мясные",
  "Вегитарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems: string[] = ["популярности", "цене", "алфавиту"];

const main: FC = () => {
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
              {pizzas.map((pizza, index) => (
                <PizzaItem key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default main;
