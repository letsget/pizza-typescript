import React, { FC, useState } from "react";

interface Props {
  items: string[];
}
const Categories: FC<Props> = ({ items }) => {
  const [active, setActive] = useState(0);

  const onSelect = (index: number) => {
    setActive(index);
  };

  return (
    <div className="categories">
      <ul>
        {items.map((item: string, index: number) => (
          <li
            className={active === index ? "active" : ""}
            onClick={() => onSelect(index)}
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
