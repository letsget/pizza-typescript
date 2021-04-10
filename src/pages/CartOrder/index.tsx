import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import HeaderCart from "../../components/HeaderCart";
import Logo from "../../components/Logo";
import { connect, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  handleIncrement,
  handleDecrement,
  getOrderPrice,
  getOrderLength,
} from "../../redux/actions/cart";
import { PizzaInCartProps } from "../../types";
import {
  getCart,
  getOrderNumber,
  getTotalOrderPrice,
} from "../../redux/selectors";
import CartItem from "../../components/CartItem";
import CartTop from "../../components/CartTop";

interface Props {
  cart: PizzaInCartProps[];
  orderNumber: number;
  orderPrice: number;
}

const CartOrder: FC<Props> = ({ cart, orderNumber, orderPrice }) => {
  const dispatch = useDispatch();

  const onRemove = useCallback(
    () => (i: number) => {
      dispatch(removeFromCart(i));
      dispatch(getOrderPrice(orderPrice));
      dispatch(getOrderLength(orderNumber));
    },
    [orderPrice, orderNumber, dispatch]
  );

  const onClear = () => dispatch(clearCart());

  const onIncrement = (i: number, price: number) => {
    dispatch(handleIncrement(i, price));
    dispatch(getOrderPrice(orderPrice));
    dispatch(getOrderLength(orderNumber));
  };

  const onDecrement = (i: number, price: number) => {
    dispatch(handleDecrement(i, price));
    dispatch(getOrderPrice(orderPrice));
    dispatch(getOrderLength(orderNumber));
  };

  return (
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <Link to="/">
            <Logo />
          </Link>
          <HeaderCart orderPrice={orderPrice} />
        </div>
      </div>
      <div className="content">
        <div className="container container--cart">
          <div className="cart">
            <CartTop onClear={onClear} />
            <div className="content__items">
              {cart.map(
                (
                  {
                    id,
                    imageUrl,
                    name,
                    type,
                    size,
                    quantity,
                    pizzaPrice,
                    totalPrice,
                    options,
                  },
                  i
                ) => (
                  <CartItem
                    key={id}
                    path={imageUrl}
                    name={name}
                    doughType={type}
                    size={size}
                    quantity={quantity}
                    price={pizzaPrice}
                    total={totalPrice}
                    index={i}
                    options={options}
                    onRemove={onRemove}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                  />
                )
              )}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  {" "}
                  Всего пицц: <b>{orderNumber} шт.</b>{" "}
                </span>
                <span>
                  {" "}
                  Сумма заказа: <b>{orderPrice} ₽</b>{" "}
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link
                  to="/"
                  className="button button--outline button--add go-back-btn"
                >
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13L1 6.93015L6.86175 1"
                      stroke="#D3D3D3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>Вернуться назад</span>
                </Link>
                <div className="button pay-btn">
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: getCart(state),
    orderNumber: getOrderNumber(state),
    orderPrice: getTotalOrderPrice(state),
  };
};

export default connect(mapStateToProps)(CartOrder);
