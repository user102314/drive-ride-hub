import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Key } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Véhicules premium disponibles
            </span>
          </div>

          {/* Title */}
          <h1 
            id="hero-title"
            className="heading-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 animate-fade-up-delay-1"
          >
            <span className="text-foreground">L'excellence </span>
            <span className="text-gradient">automobile</span>
            <br />
            <span className="text-foreground">à votre portée</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up-delay-2">
            Découvrez notre sélection exclusive de véhicules à l'achat ou à la location. 
            Qualité, transparence et service premium.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
            <Link to="/vente">
              <Button className="btn-hero w-full sm:w-auto flex items-center justify-center gap-2 text-base">
                <Car className="h-5 w-5" />
                Acheter un véhicule
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/location">
              <Button className="btn-outline-hero w-full sm:w-auto flex items-center justify-center gap-2 text-base">
                <Key className="h-5 w-5" />
                Louer un véhicule
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            {[
              { value: "500+", label: "Véhicules vendus" },
              { value: "98%", label: "Clients satisfaits" },
              { value: "15+", label: "Années d'expertise" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs uppercase tracking-widest">Défiler</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
