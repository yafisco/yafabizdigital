import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Heart, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight, 
  Award, 
  Users, 
  Globe, 
  Zap, 
  Sparkles, 
  Cpu, 
  Lightbulb, 
  Compass,
  GraduationCap
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />

      <main className="flex-1 pt-24">
        {/* 1. HERO SECTION ÉMOTIONNELLE */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
          
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                L'Afrique de demain, aujourd'hui
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
                Bâtir une <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary/80">Marque Digitale</span> sans frontières.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                Entre technologie de pointe et humanité, nous créons l'écosystème où le bien-être rencontre l'intelligence artificielle pour transformer l'entrepreneuriat africain.
              </p>
            </div>
          </div>
        </section>

        {/* 2. HISTOIRE DU FONDATEUR */}
        <section className="py-24 border-t border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:bg-primary/30 transition-all duration-500" />
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-border bg-muted">
                  {/* Placeholder for Ibrahima Yafa */}
                  <img 
                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=800&auto=format&fit=crop" 
                    alt="Ibrahima Yafa"
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <p className="text-2xl font-bold">Ibrahima Yafa</p>
                    <p className="text-sm opacity-80 uppercase tracking-widest">Thiès, Sénégal | 26 ans</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                  <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">L'Homme derrière la vision</h2>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">De Thiès au monde digital.</h3>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Passionné par le business digital, l'intelligence artificielle et le marketing relationnel, j'ai vu très tôt dans le numérique un levier de liberté sans précédent pour la jeunesse africaine.
                    </p>
                    <p>
                      À 26 ans, ma mission est devenue claire : transformer le commerce traditionnel en un écosystème intelligent, automatisé et profondément humain. YAFABiz Digital n'est pas seulement une entreprise, c'est l'incarnation de cette ambition.
                    </p>
                    <p>
                      Je crois en une Afrique qui ne subit pas la technologie, mais qui la dompte. Une Afrique où l'IA et le "Vibe Coding" deviennent des outils de création de richesse et d'impact.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  {['Business AI-Native', 'Marketing Digital', 'E-commerce', 'Branding'].map((skill) => (
                    <span key={skill} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MISSION & VISION */}
        <section className="py-24 bg-card/50 border-y border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Compass className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Notre Vision</h2>
                <p className="text-xl text-muted-foreground leading-relaxed italic">
                  "Construire une marque digitale africaine moderne et un écosystème AI-native qui propulse une nouvelle génération d'entrepreneurs vers l'indépendance."
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Notre Mission</h2>
                <ul className="space-y-4">
                  {[
                    "Améliorer le bien-être grâce aux produits Forever.",
                    "Démocratiser l'IA et le digital en Afrique.",
                    "Transformer WhatsApp en un puissant moteur de business.",
                    "Créer des systèmes automatisés et intelligents."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-whatsapp shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VALEURS DE LA MARQUE */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-12 text-center">Ce qui nous définit</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: 'Liberté', icon: Sparkles },
                { label: 'Discipline', icon: ShieldCheck },
                { label: 'Croissance', icon: Zap },
                { label: 'Innovation', icon: Cpu },
                { label: 'Spiritualité', icon: Heart },
                { label: 'Contribution', icon: Users },
                { label: 'Apprentissage', icon: GraduationCap },
                { label: 'Impact', icon: Globe },
                { label: 'Excellence', icon: Award },
                { label: 'Authenticité', icon: Lightbulb },
              ].map((value, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center">
                  <value.icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-semibold text-sm">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. POURQUOI YAFABIZ DIGITAL EXISTE */}
        <section className="py-24 bg-primary text-white rounded-[2.5rem] mx-4 md:mx-12 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">Plus qu'une boutique, une révolution technologique au service de l'humain.</h2>
              <p className="text-xl opacity-90 leading-relaxed mb-8">
                YAFABiz Digital est la fusion parfaite entre le bien-être traditionnel et l'intelligence de demain. Nous combinons la qualité irréprochable des produits Forever avec une approche business futuriste : WhatsApp marketing, automatisation IA et branding personnel.
              </p>
              <div className="flex flex-wrap gap-12 mt-12">
                <div>
                  <p className="text-4xl font-black mb-1 tracking-tighter">Premium</p>
                  <p className="text-sm opacity-60 uppercase">Positionnement</p>
                </div>
                <div>
                  <p className="text-4xl font-black mb-1 tracking-tighter">AI-Native</p>
                  <p className="text-sm opacity-60 uppercase">Technologie</p>
                </div>
                <div>
                  <p className="text-4xl font-black mb-1 tracking-tighter">Africain</p>
                  <p className="text-sm opacity-60 uppercase">Identité</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OBJECTIFS FUTURS */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-12 text-center">Le futur est maintenant</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "SaaS & Outils IA", 
                  desc: "Développer des solutions logicielles intelligentes adaptées au marché africain.",
                  icon: Cpu 
                },
                { 
                  title: "CRM WhatsApp Africain", 
                  desc: "Construire l'outil ultime de gestion client conçu pour les entrepreneurs mobile-first.",
                  icon: MessageCircle 
                },
                { 
                  title: "Académie Digitale", 
                  desc: "Former et accompagner la jeunesse africaine aux métiers de demain.",
                  icon: GraduationCap 
                }
              ].map((goal, i) => (
                <div key={i} className="p-8 rounded-3xl bg-card border border-border relative group hover:shadow-2xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <goal.icon className="w-6 h-6 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{goal.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{goal.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CTA WHATSAPP */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-card to-background border border-border text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.05),transparent_70%)]" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
                  Faisons de votre ambition une <span className="text-primary">réalité</span>.
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Prêt à discuter de votre bien-être ou de votre projet business ? Je suis à un message de vous.
                </p>
                <Button size="lg" className="h-16 px-12 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white text-lg font-bold shadow-xl shadow-whatsapp/30 group">
                  <MessageCircle className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                  Discuter avec Ibrahima
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Re-using check circle from lucide for consistency if needed, but it's already in the imports
function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
