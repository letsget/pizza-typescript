export interface CategoryProps {
  categories: string[];
}

export interface PizzaProps {
  id?: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}
