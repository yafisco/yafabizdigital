export type Product = {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  category: 'Santé' | 'Nutrition' | 'Beauté' | 'Bien-être';
  description: string;
  image: string;
  isPopular?: boolean;
  slug: string;
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Forever Aloe Vera Gel',
    price: 19500,
    priceFormatted: '19 500 FCFA',
    category: 'Santé',
    description: 'Boisson à base d’aloe vera favorisant la digestion, le bien-être intestinal, l’hydratation et le soutien du système immunitaire.',
    image: 'https://images.unsplash.com/photo-1629363447953-29ec100eb871?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    slug: 'forever-aloe-vera-gel',
  },
  {
    id: '2',
    name: 'Forever Aloe Berry Nectar',
    price: 19500,
    priceFormatted: '19 500 FCFA',
    category: 'Santé',
    description: 'Boisson aloe vera aux fruits rouges contribuant à la digestion et à l’apport en antioxydants.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    slug: 'forever-aloe-berry-nectar',
  },
  {
    id: '3',
    name: 'Forever Bee Honey',
    price: 13500,
    priceFormatted: '13 500 FCFA',
    category: 'Nutrition',
    description: 'Miel naturel riche en énergie et en antioxydants, idéal pour soutenir l’organisme et remplacer le sucre raffiné.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    slug: 'forever-bee-honey',
  },
  {
    id: '4',
    name: 'Forever Fields of Greens',
    price: 10000,
    priceFormatted: '10 000 FCFA',
    category: 'Nutrition',
    description: 'Complément nutritionnel à base de légumes verts et d’orge favorisant l’énergie, l’équilibre alimentaire et le bien-être général.',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=800&auto=format&fit=crop',
    slug: 'forever-fields-of-greens',
  },
  {
    id: '5',
    name: 'Forever Arctic Sea',
    price: 23500,
    priceFormatted: '23 500 FCFA',
    category: 'Santé',
    description: 'Complément riche en oméga-3 contribuant au bon fonctionnement du cœur, du cerveau et de la circulation.',
    image: 'https://images.unsplash.com/photo-1626202346584-c77aa9365611?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    slug: 'forever-arctic-sea',
  },
  {
    id: '6',
    name: 'Forever Aloe Peaches',
    price: 19500,
    priceFormatted: '19 500 FCFA',
    category: 'Santé',
    description: 'Boisson aloe vera saveur pêche favorisant l’hydratation, la digestion et le bien-être général.',
    image: 'https://images.unsplash.com/photo-1559163387-f82798991444?q=80&w=800&auto=format&fit=crop',
    slug: 'forever-aloe-peaches',
  },
  {
    id: '7',
    name: 'Forever Bright Toothgel',
    price: 9000,
    priceFormatted: '9 000 FCFA',
    category: 'Beauté',
    description: 'Dentifrice à l’aloe vera aidant à nettoyer les dents, rafraîchir l’haleine et protéger les gencives.',
    image: 'https://images.unsplash.com/photo-1559594864-79326f85f39c?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    slug: 'forever-bright-toothgel',
  },
  {
    id: '8',
    name: 'Aloe Heat Lotion',
    price: 22000,
    priceFormatted: '22 000 FCFA',
    category: 'Bien-être',
    description: 'Lotion chauffante apaisante idéale pour les massages musculaires et la récupération après effort.',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop',
    slug: 'aloe-heat-lotion',
  },
  {
    id: '9',
    name: 'Forever Aloe Lips',
    price: 4000,
    priceFormatted: '4 000 FCFA',
    category: 'Beauté',
    description: 'Baume hydratant pour les lèvres enrichi à l’aloe vera et au jojoba pour protéger contre le dessèchement.',
    image: 'https://images.unsplash.com/photo-1599594864-79326f85f39c?q=80&w=800&auto=format&fit=crop',
    slug: 'forever-aloe-lips',
  },
  {
    id: '11',
    name: 'Forever Argi+',
    price: 59000,
    priceFormatted: '59 000 FCFA',
    category: 'Nutrition',
    description: 'Complément nutritionnel à base de L-arginine et vitamines favorisant l’énergie, la circulation et les performances physiques.',
    image: 'https://images.unsplash.com/photo-1514367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    slug: 'forever-argi-plus',
  },
  {
    id: '12',
    name: 'Forever Bee Propolis',
    price: 11500,
    priceFormatted: '11 500 FCFA',
    category: 'Santé',
    description: 'Complément à base de propolis aidant à soutenir les défenses naturelles et le bien-être général.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    slug: 'forever-bee-propolis',
  },
];
