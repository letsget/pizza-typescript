import React, { FC, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderCart from "../../components/HeaderCart";
import Logo from "../../components/Logo";
import { connect, useDispatch } from "react-redux";
import {
  loadCartProducts,
  removeFromCart,
  clearCart,
  handleIncrement,
  handleDecrement,
} from "../../redux/actions/cart";
import { PizzaInCartProps } from "../../types";
import {
  getCart,
  getOrderNumber,
  getTotalOrderPrice,
} from "../../redux/selectors";
import CartItem from "../../components/CartItem";
import CartTop from "../../components/CartTop";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface Props {
  cart: any[];
  orderNumber: number;
  orderPrice: number;
}

const CartOrder: FC<Props> = ({ cart, orderNumber, orderPrice }) => {
  const dispatch = useDispatch();
  const [storageCart, setStorageCart] = useLocalStorage("cart", cart);

  useEffect(() => {
    if (cart.length === 0) {
      if (window.localStorage.getItem("cart")) {
        dispatch(loadCartProducts(storageCart));
      }
    }
  }, []);

  const onRemove = (i: number) => {
    dispatch(removeFromCart(i));
    setTimeout(() => {
      setStorageCart(cart);
    }, 0);
  };

  const onClear = () => {
    dispatch(clearCart());
    window.localStorage.removeItem("cart");
  };

  const onIncrement = (i: number, price: number) => {
    dispatch(handleIncrement(i, price));
    setStorageCart(cart);
  };

  const onDecrement = (i: number, price: number) => {
    dispatch(handleDecrement(i, price));
    setStorageCart(cart);
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
