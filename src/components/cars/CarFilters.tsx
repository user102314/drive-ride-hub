import { getUniqueMarques, getUniqueCarburants } from "@/data/cars";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { X, SlidersHorizontal } from "lucide-react";

interface CarFiltersProps {
  filters: {
    marque: string;
    carburant: string;
    prixMin: number;
    prixMax: number;
  };
  onFiltersChange: (filters: CarFiltersProps["filters"]) => void;
  type: "location" | "vente";
}

export function CarFilters({ filters, onFiltersChange, type }: CarFiltersProps) {
  const marques = getUniqueMarques();
  const carburants = getUniqueCarburants();

  const maxPrice = type === "location" ? 300 : 100000;
  const priceStep = type === "location" ? 10 : 5000;
  const priceLabel = type === "location" ? "€/jour" : "€";

  const resetFilters = () => {
    onFiltersChange({
      marque: "",
      carburant: "",
      prixMin: 0,
      prixMax: maxPrice,
    });
  };

  const hasActiveFilters = filters.marque || filters.carburant || filters.prixMin > 0 || filters.prixMax < maxPrice;

  return (
    <div className="glass-strong rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Filtres</h2>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Réinitialiser
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Marque */}
        <div className="space-y-2">
          <Label htmlFor="marque" className="text-sm text-muted-foreground">
            Marque
          </Label>
          <Select
            value={filters.marque}
            onValueChange={(value) => onFiltersChange({ ...filters, marque: value })}
          >
            <SelectTrigger id="marque" className="bg-secondary border-border">
              <SelectValue placeholder="Toutes les marques" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Toutes les marques</SelectItem>
              {marques.map((marque) => (
                <SelectItem key={marque} value={marque}>
                  {marque}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Carburant */}
        <div className="space-y-2">
          <Label htmlFor="carburant" className="text-sm text-muted-foreground">
            Carburant
          </Label>
          <Select
            value={filters.carburant}
            onValueChange={(value) => onFiltersChange({ ...filters, carburant: value })}
          >
            <SelectTrigger id="carburant" className="bg-secondary border-border">
              <SelectValue placeholder="Tous les carburants" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Tous les carburants</SelectItem>
              {carburants.map((carburant) => (
                <SelectItem key={carburant} value={carburant}>
                  {carburant}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Prix Min/Max */}
        <div className="md:col-span-2 space-y-4">
          <Label className="text-sm text-muted-foreground">
            Budget: {filters.prixMin.toLocaleString()}{priceLabel} - {filters.prixMax.toLocaleString()}{priceLabel}
          </Label>
          <div className="px-2">
            <Slider
              value={[filters.prixMin, filters.prixMax]}
              onValueChange={([min, max]) =>
                onFiltersChange({ ...filters, prixMin: min, prixMax: max })
              }
              max={maxPrice}
              step={priceStep}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
