import React, { FC, useState } from "react";

interface Props {
  items: any;
  onFilter: Function;
  filter: string;
}
const Categories: FC<Props> = ({ items, onFilter, filter }) => {
  return (
    <div className="categories">
      <ul>
        {Object.entries(items).map(([key, current]: any[]) => (
          <li
            className={filter === key ? "active" : ""}
            onClick={() => onFilter(key)}
            key={key}
          >
            {current}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
