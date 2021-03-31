import React, { FC } from "react";
import Logo from "../Logo";
import HeaderCart from "../HeaderCart";

interface Props {
  orderPrice: number;
}

const Header: FC<Props> = ({ orderPrice }) => {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <HeaderCart orderPrice={orderPrice} />
      </div>
    </div>
  );
};

export default Header;
