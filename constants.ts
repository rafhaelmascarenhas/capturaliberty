import { Benefit, Product, Testimonial } from './types';

// Products data is currently unused in the short version, but kept for type consistency if needed later.
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Air Jordan 1 High OG',
    colorway: 'Lost & Found',
    price: 1299,
    originalPrice: 1599,
    imageUrl: 'https://picsum.photos/600/600?random=1',
    badges: ['-20% OFF', 'MAIS VENDIDO'],
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: '1',
    icon: 'fa-wind',
    title: 'Tecnologia Respirável',
    description: 'Malha de engenharia avançada que mantém seus pés frescos, seja na corrida ou no dia a dia.',
  },
  {
    id: '2',
    icon: 'fa-shoe-prints',
    title: 'Amortecimento Max',
    description: 'Espuma de alta densidade projetada para absorver impacto e retornar energia a cada passo.',
  },
  {
    id: '3',
    icon: 'fa-unlock-alt',
    title: 'Acesso Antecipado',
    description: 'Membros da lista VIP garantem os lançamentos antes do público geral e preços exclusivos.',
  },
];

export const TESTIMONIALS: Testimonial[] = [];