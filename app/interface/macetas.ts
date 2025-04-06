export interface Maceta {
  id: number;
  category: string;
  name: string;
  description: string;
  sizes: string[];
  priceRange: {
    min: number;
    max: number;
  };
  image: string;
}
