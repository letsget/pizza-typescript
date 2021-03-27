import React, { FC, useState } from "react";

interface Props {
  items: string[];
  onFilter: Function;
  filter: string;
}
const Categories: FC<Props> = ({ items, onFilter, filter }) => {
  return (
    <div className="categories">
      <ul>
        {items.map((item: string) => (
          <li
            className={filter === item ? "active" : ""}
            onClick={() => onFilter(item)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
