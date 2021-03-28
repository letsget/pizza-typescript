export interface CategoryProps {
  categories: string[];
}

export interface PizzaProps {
  id?: number;
  imageUrl: string;
  name: string;
  types: number[];
  doughTypes: string[];
  availableSizes: number[];
  sizes: number[];
  price: number;
  category: string;
  rating: number;
}
