'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/providers/cart-provider';
import { MessageCircle, ShoppingBag, Trash2, ArrowRight, Minus, Plus } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeItem, addItem, totalCount, clearCart } = useCart();

  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalPriceFormatted = new Intl.NumberFormat('fr-FR', {
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(totalPrice) + ' FCFA';

  const handleCheckout = () => {
    const productsList = items.map(i => `- ${i.name} (x${i.quantity}) : ${i.priceFormatted}`).join('\n');
    const message = encodeURIComponent(`Bonjour YAFABiz ! Je souhaite finaliser ma commande :\n\n${productsList}\n\nTotal : ${totalPriceFormatted}\n\nMerci de me donner la marche à suivre.`);
    window.open(`https://wa.me/221XXXXXXXXX?text=${message}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>

          {items.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-[2.5rem] border border-border">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Votre panier est vide</h2>
              <p className="text-muted-foreground mb-8">Découvrez nos produits Forever pour commencer votre shopping.</p>
              <Link href="/products">
                <Button className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90">
                  Voir la boutique
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Items List */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-card border border-border rounded-2xl">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg truncate">{item.name}</h3>
                      <p className="text-primary font-bold">{item.priceFormatted}</p>
                    </div>
                    <div className="flex items-center gap-3 bg-muted rounded-full px-3 py-1">
                      <button className="p-1 hover:text-primary transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-bold w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => addItem(item)}
                        className="p-1 hover:text-primary transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                ))}
                
                <Button 
                  variant="ghost" 
                  onClick={clearCart}
                  className="text-muted-foreground hover:text-destructive"
                >
                  Vider le panier
                </Button>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-3xl p-8 sticky top-24 shadow-sm">
                  <h2 className="text-xl font-bold mb-6">Résumé</h2>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Produits ({totalCount})</span>
                      <span>{totalPriceFormatted}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Livraison</span>
                      <span className="text-whatsapp font-medium text-xs uppercase tracking-wider">Calculée à l'envoi</span>
                    </div>
                    <div className="border-t border-border pt-4 flex justify-between font-bold text-xl">
                      <span>Total</span>
                      <span>{totalPriceFormatted}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleCheckout}
                    className="w-full h-14 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full font-bold text-lg shadow-lg shadow-whatsapp/20 transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="mr-2 w-6 h-6" />
                    Commander sur WhatsApp
                  </Button>
                  
                  <Link href="/products" className="block text-center mt-6 text-sm text-muted-foreground hover:text-primary transition-colors">
                    Continuer mes achats
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
