import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="font-bold text-lg tracking-tight">
                YAFABiz Digital
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Plateforme e-commerce moderne dédiée à la distribution des produits Forever. Qualité, rapidité et service client exceptionnel via WhatsApp.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#products" className="hover:text-foreground transition-colors">Nos Produits</Link></li>
              <li><Link href="#benefits" className="hover:text-foreground transition-colors">Avantages</Link></li>
              <li><Link href="#about" className="hover:text-foreground transition-colors">À Propos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Légal & Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-foreground transition-colors">CGV</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Confidentialité</Link></li>
              <li><Link href="mailto:contact@yafabiz.com" className="hover:text-foreground transition-colors">contact@yafabiz.com</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} YAFABiz Digital. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Créé avec passion par <span className="text-foreground font-medium">Ibrahima l'optimiste</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
