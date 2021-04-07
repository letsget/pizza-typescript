export interface CategoryProps {
  categories: string[];
}

export interface extraProps {
  [key: string]: number;
}

export interface PizzaProps {
  id?: number;
  imageUrl: string;
  name: string;
  types: string[];
  sizes: number[];
  price: number[];
  category: string;
  rating: number;
  extras: extraProps;
  orderNumber: number;
  orderPrice: number;
}

export interface PizzaPopupProps {
  imageUrl: string;
  name: string;
  types: string[];
  sizes: number[];
  price: number[];
  extras: {
    [key: string]: number;
  };
  onPopupClose: any;
}

export interface PizzaInCartProps {
  id?: number;
  imageUrl: string;
  name: string;
  type: string;
  size: number;
  quantity: number;
  pizzaPrice: number;
  totalPrice: number;
  options: any[];
}
