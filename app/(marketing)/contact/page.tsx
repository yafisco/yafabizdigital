import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contactez-nous</h1>
            <p className="text-muted-foreground text-lg">
              Une question sur un produit Forever ou besoin d'un conseil personnalisé ? Nous sommes à votre écoute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-8 rounded-3xl bg-whatsapp/5 border border-whatsapp/20 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-whatsapp/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <MessageCircle className="w-10 h-10 text-whatsapp mb-6" />
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-6">Le moyen le plus rapide pour obtenir une réponse.</p>
                <a 
                  href="https://wa.me/221XXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-whatsapp font-bold hover:underline"
                >
                  Discuter maintenant
                  <Send className="ml-2 w-4 h-4" />
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-card border border-border group hover:border-primary/50 transition-all duration-300">
                <Mail className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm mb-6">Pour vos demandes administratives ou partenariats.</p>
                <a href="mailto:contact@yafabiz.com" className="text-primary font-semibold hover:underline">
                  contact@yafabiz.com
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-card border border-border group hover:border-blue-500/50 transition-all duration-300">
                <Phone className="w-10 h-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                <p className="text-muted-foreground text-sm mb-6">Du lundi au samedi, de 9h à 19h.</p>
                <p className="font-bold text-lg">+221 XX XXX XX XX</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl font-bold mb-8">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nom complet</label>
                    <Input placeholder="Votre nom" className="h-12 bg-background border-border focus:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="votre@email.com" className="h-12 bg-background border-border focus:ring-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sujet</label>
                  <Input placeholder="Comment pouvons-nous vous aider ?" className="h-12 bg-background border-border focus:ring-primary" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Dites-nous tout..." 
                    className="min-h-[150px] bg-background border-border focus:ring-primary resize-none" 
                  />
                </div>

                <Button className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20">
                  Envoyer le message
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-4">
                  <CheckCircle2 className="w-4 h-4 text-whatsapp" />
                  Vos données sont sécurisées et traitées dans les plus brefs délais.
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
