import React, { FC, useState } from "react";
import { addToCart, addExistingItem } from "../../redux/actions/cart";
import { PizzaProps, PizzaInCartProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

const PizzaItem: FC<PizzaProps> = ({ imageUrl, name, types, sizes, price }) => {
  const cart = useSelector(({ cart }: any) => cart.productsInCart);
  const dispatch = useDispatch();
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[1]);
  const [finalPrice, setFinalPrice] = useState(price[1]);

  const onSelectType = (type: string) => {
    setActiveType(type);
  };

  const onSelectSize = (size: number, index: number) => {
    setActiveSize(size);
    setFinalPrice(price[index]);
  };

  // id: Math.random(),
  // imageUrl: "none",
  // name: "test",
  // type: payload.activeType,
  // size: payload.activeSize,
  // quantity: payload.count,
  // pizzaPrice: payload.finalPrice,

  const onAdd = () => {
    const index = cart.findIndex(
      (item: PizzaInCartProps) =>
        item.name === name &&
        item.type === activeType &&
        item.size === activeSize
    );
    if (index >= 0) {
      dispatch(addExistingItem(index, finalPrice));
    } else {
      dispatch(addToCart(activeType, activeSize, finalPrice, imageUrl, name));
    }
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((doughType: string, index: number) => (
            <li
              className={classNames({
                active: doughType === activeType,
              })}
              onClick={() => onSelectType(doughType)}
              key={index}
            >
              {doughType}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size: number, index: number) => (
            <li
              key={index}
              onClick={() => onSelectSize(size, index)}
              className={classNames({
                active: activeSize === size,
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{finalPrice} ₽</div>
        <div onClick={onAdd} className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;