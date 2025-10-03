export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  currency: string;
  image: string;
  bestseller: boolean;
  featured: boolean;
  quantity: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}
