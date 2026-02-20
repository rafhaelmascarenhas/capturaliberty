import { Benefit, Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'On Cloudtilt',
    colorway: 'Ivory',
    price: 1299, // Preço placeholder
    originalPrice: 0,
    imageUrl: 'https://via.placeholder.com/600x600?text=On+Cloudtilt', 
    badges: ['NOVO', 'TRENDING'],
  },
  {
    id: '2',
    name: 'Nike Air Zoom Alphafly 3',
    colorway: 'All Black',
    price: 1899, // Preço placeholder
    originalPrice: 0,
    imageUrl: 'https://via.placeholder.com/600x600?text=Nike+Alphafly+3', 
    badges: ['PERFORMANCE', 'LIMITADO'],
  },
  {
    id: '3',
    name: 'New Balance 9060',
    colorway: 'Bone Sparrow',
    price: 1199, // Preço placeholder
    originalPrice: 0,
    imageUrl: 'https://via.placeholder.com/600x600?text=NB+9060', 
    badges: ['STREETWEAR', 'BESTSELLER'],
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    icon: 'fa-check-circle', // Ícone mais amigável
    title: 'QUALIDADE SUPERIOR',
    description: 'Materiais selecionados e acabamento impecável para garantir durabilidade e estilo.',
  },
  {
    id: '2',
    icon: 'fa-shoe-prints', // Ícone mais direto
    title: 'CONFORTO DIÁRIO',
    description: 'Desenvolvido para oferecer o suporte ideal, perfeito para acompanhar o seu ritmo.',
  },
  {
    id: '3',
    icon: 'fa-star', // Ícone de exclusividade
    title: 'EDIÇÃO LIMITADA',
    description: 'Modelos produzidos em pequenas quantidades, garantindo exclusividade para quem usa.',
  },
];

export const TESTIMONIALS: Testimonial[] = [];