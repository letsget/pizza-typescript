import React, { FC } from "react";

interface Props {
  filter: string;
}

const Title: FC<Props> = ({ filter }) => (
  <h2 className="content__title">{filter === "Все" ? "Все пиццы" : filter}</h2>
);

export default Title;
