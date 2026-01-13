import { Link } from "react-router-dom";
import { carsData } from "@/data/cars";
import { CarCard } from "@/components/cars/CarCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PopularCars() {
  // Get first 6 available cars
  const popularCars = carsData.filter(car => car.disponible).slice(0, 6);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card" aria-labelledby="popular-title">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Notre sélection
          </span>
          <h2 id="popular-title" className="heading-display text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            Véhicules <span className="text-gradient">populaires</span>
          </h2>
          <p className="text-muted-foreground">
            Découvrez les véhicules les plus demandés par nos clients. 
            Qualité garantie et disponibilité immédiate.
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCars.map((car, index) => (
            <div
              key={car.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/vente">
            <Button className="btn-outline-hero inline-flex items-center gap-2">
              Voir tous les véhicules
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
