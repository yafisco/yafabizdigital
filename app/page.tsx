'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, MessageCircle, Star, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products-data';
import { useCart } from '@/providers/cart-provider';
import { toast } from 'sonner';

const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.isPopular).slice(0, 3);

export default function Home() {
  const { addItem } = useCart();
  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-[#0A0A0A]">
      <Header />

      <main className="flex-1 pt-16">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          {/* Subtle Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex w-2 h-2 rounded-full bg-whatsapp"></span>
              Service Client WhatsApp 24/7
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              L'excellence <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Forever</span> à portée de main.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Découvrez la gamme complète des produits Forever Living. Une qualité exceptionnelle, commandée en un clic et livrée directement chez vous.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-full shadow-[0_0_20px_rgba(0,112,243,0.3)] hover:shadow-[0_0_25px_rgba(0,112,243,0.5)] transition-all">
                Découvrir le catalogue
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full bg-background hover:bg-muted border-border">
                Commander via WhatsApp
                <MessageCircle className="ml-2 w-5 h-5 text-whatsapp" />
              </Button>
            </div>
          </div>
        </section>

        {/* LOGOS / SOCIAL PROOF */}
        <section className="py-10 border-y border-border bg-card/50">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-medium text-muted-foreground mb-6">ILS NOUS FONT CONFIANCE</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
              <div className="text-xl font-bold tracking-widest">FOREVER</div>
              <div className="text-xl font-bold tracking-widest">FLUID</div>
              <div className="text-xl font-bold tracking-widest">NATURE</div>
              <div className="text-xl font-bold tracking-widest">HEALTH</div>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section id="products" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Produits Phares</h2>
                <p className="text-muted-foreground text-lg">
                  Notre sélection des meilleurs produits Forever pour votre bien-être au quotidien.
                </p>
              </div>
              <Button variant="link" className="hidden md:flex text-primary hover:text-primary/80 px-0">
                Voir tout le catalogue <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FEATURED_PRODUCTS.map((product) => (
                <div key={product.id} className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    {product.isPopular && (
                      <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        Best Seller
                      </div>
                    )}
                    {/* Placeholder image from Unsplash */}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-lg font-bold">{product.priceFormatted}</span>

                      <Button 
                        onClick={() => {
                          addItem(product);
                          toast.success(`${product.name} ajouté au panier !`);
                        }}
                        className="bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full px-6"
                      >
                        Commander
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center md:hidden">
              <Button variant="outline" className="w-full rounded-full h-12">
                Voir tout le catalogue
              </Button>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section id="benefits" className="py-24 bg-card/30 border-y border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Pourquoi choisir YAFABiz ?</h2>
              <p className="text-muted-foreground text-lg">
                Une expérience e-commerce repensée pour vous offrir rapidité, confiance et simplicité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Commande Express</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pas de panier compliqué. Cliquez, envoyez le message pré-rempli sur WhatsApp et votre commande est enregistrée.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center mb-6 text-whatsapp">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Produits Certifiés</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Distributeur officiel Forever. Tous nos produits sont 100% authentiques, scellés et garantis.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-background border border-border">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Livraison Rapide</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Une logistique optimisée pour vous livrer chez vous dans les plus brefs délais, partout dans le pays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Ils adorent l'expérience</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex gap-1 mb-4 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-foreground leading-relaxed mb-6">
                    "Service impeccable ! J'ai commandé mon pack détox via WhatsApp, j'ai reçu une réponse en 2 minutes et j'ai été livré le lendemain. Le design du site est magnifique."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Client Satisfait</p>
                      <p className="text-xs text-muted-foreground">Client régulier</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Prêt à prendre soin de vous ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Rejoignez des centaines de clients qui font confiance à YAFABiz pour leurs produits Forever au quotidien.
              </p>
              <Button size="lg" className="h-14 px-8 text-base bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full">
                <MessageCircle className="mr-2 w-5 h-5" />
                Discuter sur WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* FLOATING WHATSAPP BUTTON (MOBILE ONLY) */}
      <div className="fixed bottom-6 right-6 md:hidden z-50 animate-in fade-in zoom-in duration-500 delay-500">
        <Button size="icon" className="w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white shadow-lg shadow-whatsapp/30">
          <MessageCircle className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
}
