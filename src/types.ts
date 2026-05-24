export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'coffee' | 'iced' | 'pastries' | 'desserts' | 'signature';
  bestseller?: boolean;
}

export interface Review {
  id: string;
  text: string;
  author: string;
}
