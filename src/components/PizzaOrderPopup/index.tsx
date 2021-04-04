import React, { FC, useState } from "react";
import { addToCart, addExistingItem } from "../../redux/actions/cart";
import { PizzaInCartProps, PizzaPopupProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

const PizzaOrderPopup: FC<PizzaPopupProps> = ({
  imageUrl,
  name,
  types,
  sizes,
  price,
  extras,
  onPopupClose,
}) => {
  const dispatch = useDispatch();
  const cart = useSelector(({ cart }: any) => cart.productsInCart);
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
    <div className="popup-content">
      <div className="pizza-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="popup-right">
        <span onClick={onPopupClose}>
          <i className="fas fa-times close-popup" />
        </span>
        <h3>{name}</h3>
        <ul className="types">
          {types.map((doughType: string, index: number) => (
            <li
              className={classNames({
                active: doughType === activeType,
                type: doughType,
              })}
              onClick={() => onSelectType(doughType)}
              key={index}
            >
              {doughType}
            </li>
          ))}
        </ul>
        <ul className="types">
          {sizes.map((size: number, index: number) => (
            <li
              key={index}
              onClick={() => onSelectSize(size, index)}
              className={classNames({
                active: activeSize === size,
                type: size,
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
        <ul className="extras">
          {Object.entries(extras).map(([key, val]) => (
            <li className="extra-option">
              <div className="checkbox">
                <input type="checkbox" />
                <span className="name">{key}</span>
              </div>
              <div className="price">
                <span className="price">
                  <span>{val} </span>
                  <span className="ruble-sign">₽</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="button">Добавить в корзину за 585 ₽</div>
      </div>
    </div>
  );
};

export default PizzaOrderPopup;
