import React, { FC, useState } from "react";
import { addToCart, addExistingItem } from "../../redux/actions/cart";
import { PizzaInCartProps, PizzaPopupProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../../hooks/useLocalStorage";
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
  const [persistCart, setPersistCart] = useLocalStorage<string>(
    "cart",
    "empty"
  );

  const options = Object.entries(extras).reduce((acc: any, [key, val]) => {
    const obj = { name: key, price: val, selected: false };
    return [...acc, obj];
  }, []);

  const [extraOptions, setExtraOptions] = useState(options);
  const [priceForOptions, setPriceForOptions] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Array<String>>([]);

  const calcExtrasPrice = (): void => {
    let price = 0;
    let selected = [];

    for (const elem of extraOptions) {
      if (elem.selected) {
        price += elem.price;
        selected.push(elem.name);
      }
    }
    setPriceForOptions(price);
    setSelectedOptions(selected);
  };

  const onSelectType = (type: string): void => {
    setActiveType(type);
  };

  const onSelectSize = (size: number, index: number): void => {
    setActiveSize(size);
    setFinalPrice(price[index]);
  };

  const onSelectExtras = (i: number): void => {
    const copy = [...extraOptions];
    copy[i].selected = !copy[i].selected;
    setExtraOptions(copy);
    calcExtrasPrice();
  };

  const onAdd = (): void => {
    const index = cart.findIndex(
      (item: PizzaInCartProps) =>
        item.name === name &&
        item.type === activeType &&
        item.size === activeSize &&
        selectedOptions.length === 0
    );
    if (index >= 0) {
      dispatch(addExistingItem(index, finalPrice));
      onPopupClose();
    } else {
      dispatch(
        addToCart(
          activeType,
          activeSize,
          finalPrice + priceForOptions,
          imageUrl,
          name,
          selectedOptions
        )
      );
      onPopupClose();
    }
  };

  return (
    <div className="popup-content">
      <div className="pizza-image">
        <img
          className={classNames({
            "popup-img-small": activeSize === sizes[0],
            "popup-img-medium": activeSize === sizes[1],
            "popup-img-large": activeSize === sizes[2],
          })}
          src={imageUrl}
          alt=""
        />
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
          {extraOptions.map((option: any, index: number) => (
            <li key={index} className="extra-option">
              <div className="checkbox">
                <input
                  type="checkbox"
                  checked={option.selected}
                  onChange={() => onSelectExtras(index)}
                />
                <span className="name">{option.name}</span>
              </div>
              <div className="price">
                <span className="price">
                  <span>{option.price} </span>
                  <span className="ruble-sign">₽</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div onClick={onAdd} className="button">
          Добавить в корзину за {finalPrice + priceForOptions} ₽
        </div>
      </div>
    </div>
  );
};

export default PizzaOrderPopup;
