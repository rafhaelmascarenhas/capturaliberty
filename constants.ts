import { Benefit, Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'On Cloudtilt',
    colorway: 'Ivory',
    price: 1299, // Preço placeholder
    originalPrice: 0,
    imageUrl: 'https://via.placeholder.com/600x600?text=On+Cloudtilt', // Placeholder para imagem futura
    badges: ['NOVO', 'TRENDING'],
  },
  {
    id: '2',
    name: 'Nike Air Zoom Alphafly 3',
    colorway: 'All Black',
    price: 1899, // Preço placeholder
    originalPrice: 0,
    imageUrl: 'https://via.placeholder.com/600x600?text=Nike+Alphafly+3', // Placeholder para imagem futura
    badges: ['PERFORMANCE', 'LIMITADO'],
  },
  {
    id: '3',
    name: 'New Balance 9060',
    colorway: 'Bone Sparrow',
    price: 1199, // Preço placeholder
    originalPrice: 0,
    imageUrl: 'https://via.placeholder.com/600x600?text=NB+9060', // Placeholder para imagem futura
    badges: ['STREETWEAR', 'BESTSELLER'],
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    icon: 'fa-cube',
    title: 'ENGENHARIA DE PRECISÃO',
    description: 'Desenvolvidos com materiais de alta resistência e acabamento rigoroso para garantir durabilidade superior.',
  },
  {
    id: '2',
    icon: 'fa-feather-alt',
    title: 'CONFORTO DURADOURO',
    description: 'Design ergonômico e sistema de amortecimento projetado para oferecer suporte contínuo durante todo o dia.',
  },
  {
    id: '3',
    icon: 'fa-lock',
    title: 'DISPONIBILIDADE CONTROLADA',
    description: 'Lotes produzidos em quantidades limitadas para assegurar o máximo padrão de qualidade em cada par.',
  },
];

export const TESTIMONIALS: Testimonial[] = [];