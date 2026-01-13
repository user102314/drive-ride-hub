import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { CarCard } from "@/components/cars/CarCard";
import { CarFilters } from "@/components/cars/CarFilters";
import { getCarsByType } from "@/data/cars";
import { Car as CarIcon } from "lucide-react";

const VentePage = () => {
  const [filters, setFilters] = useState({
    marque: "",
    carburant: "",
    prixMin: 0,
    prixMax: 100000,
  });

  const cars = getCarsByType("vente");

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      if (filters.marque && car.marque !== filters.marque) return false;
      if (filters.carburant && car.carburant !== filters.carburant) return false;
      if (car.prix < filters.prixMin || car.prix > filters.prixMax) return false;
      return true;
    });
  }, [cars, filters]);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-card to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass">
              <CarIcon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                {filteredCars.length} véhicule{filteredCars.length > 1 ? "s" : ""} disponible{filteredCars.length > 1 ? "s" : ""}
              </span>
            </div>
            
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Véhicules à la <span className="text-gradient">vente</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Découvrez notre sélection de véhicules d'occasion premium. 
              Tous nos véhicules sont contrôlés et garantis.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding pt-8">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <CarFilters 
            filters={filters} 
            onFiltersChange={setFilters}
            type="vente"
          />

          {/* Results */}
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car, index) => (
                <div
                  key={car.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <CarIcon className="h-16 w-16 text-muted-foreground/30 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-2">Aucun véhicule trouvé</h3>
              <p className="text-muted-foreground">
                Modifiez vos critères de recherche pour voir plus de résultats.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default VentePage;
