import React, { FC } from "react";
import { useSelector } from "react-redux";
// import type { RootState } from "../../app/store";

interface Props {
  filter: any;
}

const Title: FC<Props> = ({ filter }) => {
  const filters = useSelector((store: any) => store.app.filters);
  console.log("1111", filters);
  return (
    <h2 className="content__title">
      {filter === "all" ? "Все пиццы" : filters[filter]}
    </h2>
  );
};

export default Title;
