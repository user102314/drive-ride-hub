import { Shield, Award, Clock, Headphones, CreditCard, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Garantie incluse",
    description: "Tous nos véhicules sont garantis minimum 12 mois pour votre tranquillité d'esprit.",
  },
  {
    icon: Award,
    title: "Qualité certifiée",
    description: "Chaque véhicule passe un contrôle technique rigoureux avant mise en vente.",
  },
  {
    icon: Clock,
    title: "Livraison rapide",
    description: "Livraison sous 48h partout en France ou retrait en concession.",
  },
  {
    icon: Headphones,
    title: "Support 7j/7",
    description: "Une équipe dédiée à votre écoute pour répondre à toutes vos questions.",
  },
  {
    icon: CreditCard,
    title: "Financement flexible",
    description: "Solutions de financement adaptées à votre budget avec ou sans apport.",
  },
  {
    icon: CheckCircle,
    title: "Transparence totale",
    description: "Historique complet et carnet d'entretien disponibles pour chaque véhicule.",
  },
];

export function BenefitsSection() {
  return (
    <section className="section-padding bg-card" aria-labelledby="benefits-title">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Pourquoi nous choisir
          </span>
          <h2 id="benefits-title" className="heading-display text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            Nos <span className="text-gradient">avantages</span>
          </h2>
          <p className="text-muted-foreground">
            Nous nous engageons à vous offrir une expérience d'achat et de location 
            exceptionnelle à chaque étape.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
