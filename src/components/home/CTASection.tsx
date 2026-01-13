import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Car } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="cta-title">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <Car className="w-full h-full" strokeWidth={0.5} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Offre limitée
          </span>

          {/* Title */}
          <h2 id="cta-title" className="heading-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Prêt à trouver le véhicule <span className="text-gradient">de vos rêves</span> ?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Contactez notre équipe d'experts dès aujourd'hui. 
            Estimation gratuite, conseil personnalisé et accompagnement sur-mesure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-hero flex items-center justify-center gap-2 text-base">
                <Phone className="h-5 w-5" />
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+33123456789">
              <Button className="btn-outline-hero flex items-center justify-center gap-2 text-base">
                Appeler maintenant
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-border/30">
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Sans engagement</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Réponse sous 24h</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Conseiller dédié</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
