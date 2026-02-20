export interface Product {
  id: string;
  name: string;
  colorway: string;
  price: number;
  originalPrice: number;
  imageUrl: string;
  badges: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  text: string;
  rating: number;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}