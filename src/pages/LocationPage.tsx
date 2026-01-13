import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { CarCard } from "@/components/cars/CarCard";
import { CarFilters } from "@/components/cars/CarFilters";
import { getCarsByType } from "@/data/cars";
import { Key, Calendar } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const LocationPage = () => {
  const [filters, setFilters] = useState({
    marque: "",
    carburant: "",
    prixMin: 0,
    prixMax: 300,
  });

  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");

  const cars = getCarsByType("location");

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      if (filters.marque && car.marque !== filters.marque) return false;
      if (filters.carburant && car.carburant !== filters.carburant) return false;
      if (car.prix < filters.prixMin || car.prix > filters.prixMax) return false;
      return true;
    });
  }, [cars, filters]);

  // Calculate number of days
  const nombreJours = useMemo(() => {
    if (dateDebut && dateFin) {
      const start = new Date(dateDebut);
      const end = new Date(dateFin);
      const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      return diff > 0 ? diff : 0;
    }
    return 0;
  }, [dateDebut, dateFin]);

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
              <Key className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                {filteredCars.filter(c => c.disponible).length} véhicule{filteredCars.filter(c => c.disponible).length > 1 ? "s" : ""} disponible{filteredCars.filter(c => c.disponible).length > 1 ? "s" : ""}
              </span>
            </div>
            
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Véhicules à la <span className="text-gradient">location</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Louez le véhicule de votre choix pour vos déplacements. 
              Tarifs compétitifs et véhicules récents.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding pt-8">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Date Selection */}
          <div className="glass-strong rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Période de location</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dateDebut" className="text-sm text-muted-foreground">
                  Date de début
                </Label>
                <Input
                  id="dateDebut"
                  type="date"
                  value={dateDebut}
                  onChange={(e) => setDateDebut(e.target.value)}
                  className="bg-secondary border-border"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dateFin" className="text-sm text-muted-foreground">
                  Date de fin
                </Label>
                <Input
                  id="dateFin"
                  type="date"
                  value={dateFin}
                  onChange={(e) => setDateFin(e.target.value)}
                  className="bg-secondary border-border"
                  min={dateDebut || new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div className="flex items-end">
                <div className="w-full p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-sm text-muted-foreground">Durée de location</p>
                  <p className="text-2xl font-bold text-primary">
                    {nombreJours > 0 ? `${nombreJours} jour${nombreJours > 1 ? "s" : ""}` : "—"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <CarFilters 
            filters={filters} 
            onFiltersChange={setFilters}
            type="location"
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
              <Key className="h-16 w-16 text-muted-foreground/30 mx-auto mb-6" />
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

export default LocationPage;
