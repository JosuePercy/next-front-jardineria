
export interface IProducts {
  id: number;
  category: string;
  name: string;
  price: string | number;
  image: string;
  medidas?: string[];
  description: string;
}