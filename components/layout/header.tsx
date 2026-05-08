'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, Search, MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/providers/cart-provider';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export function Header() {
  const { totalCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message envoyé ! Ibrahima vous répondra très bientôt sur WhatsApp.");
  };

  return (
    <header className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Y</span>
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">
            YAFABiz Digital
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/products" className="hover:text-foreground transition-colors">
            Produits
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            À Propos
          </Link>
        </nav>

        {/* Search Bar (Centered on Desktop) */}
        <div className="hidden md:flex flex-1 max-w-md relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Rechercher un produit..." 
            className="w-full pl-10 h-10 bg-muted/50 border-none rounded-full focus-visible:ring-1 focus-visible:ring-primary transition-all"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Mobile Search Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-muted-foreground"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </Button>

          {/* Cart */}
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {totalCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-primary text-[10px] animate-in zoom-in duration-300">
                  {totalCount}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Login Button */}
          <Link href="/login" className="hidden sm:block">
            <Button variant="ghost" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Connexion
            </Button>
          </Link>

          {/* Contact Button (Dialog) */}
          <Dialog>
            <DialogTrigger className="inline-flex items-center justify-center bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full px-4 sm:px-6 h-10 shadow-lg shadow-whatsapp/20 transition-all hover:scale-105 active:scale-95 font-medium text-sm">
              <MessageCircle className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Nous contacter</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px] rounded-[2rem] border-border bg-background p-0 overflow-hidden">
              <div className="bg-whatsapp p-8 text-white relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Parlons de votre projet</DialogTitle>
                  <DialogDescription className="text-white/80">
                    Posez vos questions sur les produits Forever ou le business digital. Ibrahima vous répondra directement.
                  </DialogDescription>
                </DialogHeader>
              </div>
              <form onSubmit={handleContactSubmit} className="p-8 space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Votre nom" className="h-12 rounded-xl" required />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Votre numéro WhatsApp" className="h-12 rounded-xl" required />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Votre message..." className="min-h-[100px] rounded-xl resize-none" required />
                </div>
                <Button type="submit" className="w-full h-12 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-xl font-bold">
                  Envoyer via WhatsApp
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="md:hidden p-4 bg-background border-b border-border animate-in slide-in-from-top duration-300">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              autoFocus
              placeholder="Rechercher..." 
              className="pl-10 h-11 bg-muted/50 border-none rounded-xl"
            />
          </div>
        </div>
      )}
    </header>
  );
}
