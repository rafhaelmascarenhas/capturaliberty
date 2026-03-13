import { Benefit, Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'On Cloudtilt',
    colorway: 'Ivory',
    price: 819,
    originalPrice: 0,
    imageUrl: '/oncloudtilt.webp', 
    badges: ['NOVO', 'TRENDING'],
    link: 'https://libertysnk.com/products/on-running-on-cloudtilt-ivory'
  },
  {
    id: '2',
    name: 'Nike Air Zoom Alphafly 3',
    colorway: 'All Black',
    price: 899,
    originalPrice: 0,
    imageUrl: '/nike-air-zoom alphafly-3allblack.webp', 
    badges: ['PERFORMANCE', 'LIMITADO'],
    link: 'https://libertysnk.com/products/nike-air-zoom-alphafly-3'
  },
  {
    id: '3',
    name: 'New Balance 9060',
    colorway: 'Bone Sparrow',
    price: 799,
    originalPrice: 0,
    imageUrl: '/nb-bore-sparrow.webp', 
    badges: ['STREETWEAR', 'BESTSELLER'],
    link: 'https://libertysnk.com/products/new-balance-9060-sea-salt-raincloud-pronta-entrega'
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    icon: 'fa-check-circle',
    title: 'QUALIDADE SUPERIOR',
    description: 'Materiais selecionados e acabamento impecável para garantir durabilidade e estilo.',
  },
  {
    id: '2',
    icon: 'fa-shoe-prints',
    title: 'CONFORTO DIÁRIO',
    description: 'Desenvolvido para oferecer o suporte ideal, perfeito para acompanhar o seu ritmo.',
  },
  {
    id: '3',
    icon: 'fa-star',
    title: 'EDIÇÃO LIMITADA',
    description: 'Modelos produzidos em pequenas quantidades, garantindo exclusividade para quem usa.',
  },
];

export const TESTIMONIALS: Testimonial[] = [];