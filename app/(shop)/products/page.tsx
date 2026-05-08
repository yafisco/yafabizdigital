'use client';

import { useState } from 'react';
import { PRODUCTS } from '@/lib/products-data';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

import { useCart } from '@/providers/cart-provider';
import { toast } from 'sonner';

const CATEGORIES = ['Tous', 'Santé', 'Nutrition', 'Beauté', 'Bien-être'];

export default function ProductsPage() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-2">Notre Boutique</h1>
              <p className="text-muted-foreground">Découvrez l'excellence des produits Forever Living pour votre bien-être.</p>
            </div>
            
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Rechercher un produit..." 
                className="pl-10 rounded-full bg-card"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
            <Filter className="w-4 h-4 mr-2 text-muted-foreground shrink-0" />
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full px-6 shrink-0"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Info */}
          <p className="text-sm text-muted-foreground mb-8">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  {product.isPopular && (
                    <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Best Seller
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{product.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-muted-foreground text-xs mb-4 flex-1 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-base font-bold">{product.priceFormatted}</span>
                    <Button 
                      size="sm" 
                      onClick={() => {
                        addItem(product);
                        toast.success(`${product.name} ajouté !`);
                      }}
                      className="bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full"
                    >
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Commander
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aucun produit trouvé</h3>
              <p className="text-muted-foreground">Essayez de modifier vos filtres ou votre recherche.</p>
              <Button 
                variant="link" 
                onClick={() => {setSelectedCategory('Tous'); setSearchQuery('');}}
                className="mt-4 text-primary"
              >
                Réinitialiser tout
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
