import React, { FC, useEffect, useState } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import Title from "../components/Title";
import PizzaItem from "../components/PizzaItem";
import { PizzaProps } from "../types";

interface Props {
  data: PizzaProps[];
}

const sortItems: string[] = ["популярности", "цене", "алфавиту"];

const Main: FC<Props> = () => {
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

export default Main;
