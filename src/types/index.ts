export interface CategoryProps {
  categories: string[];
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
}
