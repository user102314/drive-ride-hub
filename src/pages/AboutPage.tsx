import { Layout } from "@/components/layout/Layout";
import { Award, Users, Target, Heart, Clock, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "L'automobile est notre passion depuis plus de 15 ans. Nous mettons tout notre cœur dans chaque transaction."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Nous ne sélectionnons que les meilleurs véhicules, passant des contrôles rigoureux avant mise en vente."
  },
  {
    icon: Users,
    title: "Service client",
    description: "Votre satisfaction est notre priorité. Nous vous accompagnons avant, pendant et après votre achat."
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Nous adoptons les dernières technologies pour vous offrir une expérience d'achat moderne et fluide."
  }
];

const stats = [
  { value: "500+", label: "Véhicules vendus" },
  { value: "15", label: "Années d'expérience" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "50+", label: "Partenaires" }
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-card to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={logo} 
              alt="Formacity" 
              className="h-20 w-auto mx-auto mb-8"
            />
            
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              À propos de <span className="text-gradient">Formacity</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Depuis 2009, nous accompagnons nos clients dans leurs projets automobiles 
              avec passion, expertise et transparence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Notre histoire
              </span>
              <h2 className="heading-display text-3xl md:text-4xl mt-4 mb-6">
                Une passion devenue <span className="text-gradient">excellence</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Formacity est née d'une passion commune pour l'automobile et d'une volonté 
                  de proposer une expérience d'achat différente. Fondée en 2009 à Paris, 
                  notre entreprise s'est construite sur des valeurs simples : transparence, 
                  qualité et service.
                </p>
                <p>
                  Au fil des années, nous avons développé un réseau de partenaires de confiance 
                  et perfectionné nos processus de sélection et de contrôle des véhicules. 
                  Chaque voiture qui entre dans notre catalogue passe un examen rigoureux 
                  de plus de 100 points.
                </p>
                <p>
                  Aujourd'hui, Formacity est devenu une référence dans le secteur de 
                  l'automobile d'occasion premium, avec plus de 500 véhicules vendus 
                  et un taux de satisfaction client de 98%.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="card-premium p-8 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Nos valeurs
            </span>
            <h2 className="heading-display text-3xl md:text-4xl mt-4 mb-6">
              Ce qui nous <span className="text-gradient">anime</span>
            </h2>
            <p className="text-muted-foreground">
              Nos valeurs guident chacune de nos actions et définissent 
              notre approche du métier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-8 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Notre parcours
            </span>
            <h2 className="heading-display text-3xl md:text-4xl mt-4">
              Les moments <span className="text-gradient">clés</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { year: "2009", title: "Création de Formacity", description: "Ouverture de notre première concession à Paris" },
              { year: "2015", title: "Expansion nationale", description: "Développement de notre réseau de partenaires dans toute la France" },
              { year: "2020", title: "Digitalisation", description: "Lancement de notre plateforme en ligne pour une expérience d'achat moderne" },
              { year: "2024", title: "500 véhicules vendus", description: "Un cap symbolique qui témoigne de la confiance de nos clients" }
            ].map((item, index) => (
              <div key={item.year} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-primary font-bold">{item.year}</span>
                  </div>
                  {index < 3 && <div className="w-0.5 h-full bg-border mt-4" />}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
