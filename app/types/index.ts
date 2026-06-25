export interface Category {
  id: number;
  name: string;
  slug: string;
  image?: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  color_codes: string[];
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Slide {
  id: number;
  image: string;
  alt?: string;
}

export interface feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}
