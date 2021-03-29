export interface CategoryProps {
  categories: string[];
}

export interface PizzaProps {
  id?: number;
  imageUrl: string;
  name: string | number;
  types: string[];
  sizes: number[];
  price: number[];
  category: string;
  rating: number;
}
