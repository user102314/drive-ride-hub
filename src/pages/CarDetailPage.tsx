import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { getCarById, formatPrice } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Fuel, 
  Settings, 
  Calendar, 
  Gauge, 
  Users, 
  DoorOpen,
  Zap,
  Check,
  Phone,
  ShoppingCart,
  Key
} from "lucide-react";

const CarDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const car = getCarById(Number(id));

  if (!car) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Véhicule non trouvé</h1>
          <Link to="/">
            <Button className="btn-hero">Retour à l'accueil</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const specs = [
    { icon: Fuel, label: "Carburant", value: car.carburant },
    { icon: Settings, label: "Boîte", value: car.boite },
    { icon: Calendar, label: "Année", value: car.annee.toString() },
    { icon: Gauge, label: "Kilométrage", value: car.kilometrage ? `${car.kilometrage.toLocaleString()} km` : "N/A" },
    { icon: Zap, label: "Puissance", value: car.puissance || "N/A" },
    { icon: Users, label: "Places", value: car.places?.toString() || "5" },
    { icon: DoorOpen, label: "Portes", value: car.portes?.toString() || "4" },
  ];

  const features = [
    "Climatisation automatique",
    "GPS intégré",
    "Bluetooth",
    "Sièges chauffants",
    "Caméra de recul",
    "Régulateur de vitesse adaptatif",
    "Aide au stationnement",
    "Système audio premium"
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Link 
            to={car.type === "location" ? "/location" : "/vente"}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux {car.type === "location" ? "locations" : "ventes"}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-premium">
                <img
                  src={car.image}
                  alt={`${car.marque} ${car.modele} ${car.annee}`}
                  className="h-full w-full object-cover"
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
              </div>
              
              {/* Thumbnails placeholder */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-colors cursor-pointer"
                  >
                    <img
                      src={car.image}
                      alt=""
                      className="h-full w-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              {/* Title & Price */}
              <div>
                <h1 className="heading-display text-3xl md:text-4xl mb-2">
                  {car.marque} {car.modele}
                </h1>
                <p className="text-muted-foreground mb-6">{car.annee}</p>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    {formatPrice(car.prix, car.type)}
                  </span>
                  {car.type === "location" && (
                    <span className="text-muted-foreground">/ jour</span>
                  )}
                </div>
              </div>

              {/* Specifications */}
              <div className="glass-strong rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Caractéristiques</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <spec.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{spec.label}</p>
                        <p className="text-sm font-medium">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Équipements</h2>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {car.description || 
                    `La ${car.marque} ${car.modele} est un véhicule d'exception combinant performance, confort et élégance. 
                    Entretenue avec soin et vérifiée par nos experts, elle est prête à vous accompagner dans tous vos trajets.`
                  }
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {car.type === "location" ? (
                  <Link to="/contact" className="flex-1">
                    <Button 
                      className="btn-hero w-full flex items-center justify-center gap-2"
                      disabled={!car.disponible}
                    >
                      <Key className="h-5 w-5" />
                      Réserver ce véhicule
                    </Button>
                  </Link>
                ) : (
                  <Link to="/contact" className="flex-1">
                    <Button 
                      className="btn-hero w-full flex items-center justify-center gap-2"
                      disabled={!car.disponible}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Acheter ce véhicule
                    </Button>
                  </Link>
                )}
                <a href="tel:+33123456789" className="flex-1">
                  <Button className="btn-outline-hero w-full flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Nous appeler
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CarDetailPage;
