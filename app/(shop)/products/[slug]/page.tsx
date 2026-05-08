'use client';

import { useParams, useRouter } from 'next/navigation';
import { PRODUCTS } from '@/lib/products-data';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowLeft, ShieldCheck, Zap, Heart, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
          <Button onClick={() => router.push('/products')}>Retour au catalogue</Button>
        </main>
        <Footer />
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Bonjour YAFABiz ! Je souhaite commander le produit suivant :\n\nProduit : ${product.name}\nPrix : ${product.priceFormatted}\n\nMerci de me donner la marche à suivre.`);
  const whatsappUrl = `https://wa.me/221XXXXXXXXX?text=${whatsappMessage}`; // Remplacer par le numéro réel

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb / Back */}
          <Link href="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au catalogue
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted border border-border shadow-sm">
              {product.isPopular && (
                <div className="absolute top-6 left-6 z-10 bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Best Seller
                </div>
              )}
              <img 
                src={product.image} 
                alt={product.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                <Button size="icon" variant="secondary" className="rounded-full shadow-md">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full shadow-md">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-2">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">{product.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold">{product.priceFormatted}</span>
                <div className="h-6 w-px bg-border" />
                <div className="flex items-center gap-1 text-whatsapp font-medium">
                  <div className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
                  En stock
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  asChild
                  className="h-16 px-8 text-lg bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full flex-1 shadow-lg shadow-whatsapp/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-6 h-6" />
                    Commander via WhatsApp
                  </a>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-border">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Qualité Forever</h4>
                    <p className="text-xs text-muted-foreground">Produit 100% authentique et certifié.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Livraison Express</h4>
                    <p className="text-xs text-muted-foreground">Livré chez vous rapidement partout.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info / Benefits */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8">Pourquoi choisir ce produit ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold mb-2 italic">Digestion & Énergie</h3>
                <p className="text-sm text-muted-foreground">Formulé pour soutenir votre métabolisme et vous apporter l'énergie nécessaire pour votre journée.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold mb-2 italic">Ingrédients Naturels</h3>
                <p className="text-sm text-muted-foreground">Utilise le meilleur de la nature pour des résultats visibles et durables sur votre bien-être.</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold mb-2 italic">Expertise Forever</h3>
                <p className="text-sm text-muted-foreground">Fruit de plus de 40 ans de recherche et d'excellence dans le domaine de la santé naturelle.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Sticky Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-lg border-t border-border lg:hidden z-50">
        <Button 
          asChild
          className="w-full h-14 text-base bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full shadow-lg shadow-whatsapp/20"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 w-5 h-5" />
            Commander ({product.priceFormatted})
          </a>
        </Button>
      </div>
    </div>
  );
}
