import { Link } from "react-router-dom";
import { Car, formatPrice } from "@/data/cars";
import { Fuel, Settings, Calendar, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <article className="card-premium group overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={car.image}
          alt={`${car.marque} ${car.modele} ${car.annee}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="badge-type">
            {car.type === "location" ? "Location" : "Vente"}
          </span>
        </div>
        
        <div className="absolute top-4 right-4">
          {car.disponible ? (
            <span className="badge-available">Disponible</span>
          ) : (
            <span className="badge-unavailable">Indisponible</span>
          )}
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Price */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {car.marque} {car.modele}
            </h3>
            <p className="text-sm text-muted-foreground">{car.annee}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-primary">
              {formatPrice(car.prix, car.type)}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Fuel className="h-4 w-4 text-primary" />
            <span>{car.carburant}</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-primary" />
            <span>{car.boite}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{car.annee}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link to={`/voiture/${car.id}`}>
          <Button className="w-full btn-outline-hero flex items-center justify-center gap-2 !py-3">
            <Eye className="h-4 w-4" />
            Voir les détails
          </Button>
        </Link>
      </div>
    </article>
  );
}
