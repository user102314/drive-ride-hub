// Types pour les voitures
export interface Car {
  id: number;
  type: "location" | "vente";
  marque: string;
  modele: string;
  annee: number;
  prix: number; // Prix par jour pour location, prix total pour vente
  carburant: "Diesel" | "Essence" | "Électrique" | "Hybride";
  boite: "Automatique" | "Manuelle";
  image: string;
  disponible: boolean;
  kilometrage?: number;
  puissance?: string;
  places?: number;
  portes?: number;
  description?: string;
}

// Images des voitures (imports)
import mercedesImg from "@/assets/cars/mercedes.jpg";
import bmwImg from "@/assets/cars/bmw.jpg";
import audiImg from "@/assets/cars/audi.jpg";
import volkswagenImg from "@/assets/cars/volkswagen.jpg";
import peugeotImg from "@/assets/cars/peugeot.jpg";

// Données mock des voitures
export const carsData: Car[] = [
  {
    id: 1,
    type: "vente",
    marque: "BMW",
    modele: "Série 3",
    annee: 2023,
    prix: 45000,
    carburant: "Diesel",
    boite: "Automatique",
    image: bmwImg,
    disponible: true,
    kilometrage: 15000,
    puissance: "190 ch",
    places: 5,
    portes: 4,
    description: "La BMW Série 3 incarne l'excellence du plaisir de conduire. Avec son design élégant et ses performances dynamiques, elle offre une expérience de conduite incomparable."
  },
  {
    id: 2,
    type: "location",
    marque: "Mercedes",
    modele: "Classe C",
    annee: 2022,
    prix: 120,
    carburant: "Essence",
    boite: "Automatique",
    image: mercedesImg,
    disponible: true,
    kilometrage: 25000,
    puissance: "204 ch",
    places: 5,
    portes: 4,
    description: "La Mercedes Classe C allie luxe et performance. Son intérieur raffiné et ses technologies de pointe en font le choix idéal pour vos déplacements professionnels."
  },
  {
    id: 3,
    type: "vente",
    marque: "Audi",
    modele: "A4",
    annee: 2023,
    prix: 42000,
    carburant: "Hybride",
    boite: "Automatique",
    image: audiImg,
    disponible: true,
    kilometrage: 8000,
    puissance: "245 ch",
    places: 5,
    portes: 4,
    description: "L'Audi A4 combine élégance et innovation technologique. Sa motorisation hybride offre performances et efficacité énergétique."
  },
  {
    id: 4,
    type: "location",
    marque: "Volkswagen",
    modele: "Golf GTI",
    annee: 2023,
    prix: 85,
    carburant: "Essence",
    boite: "Manuelle",
    image: volkswagenImg,
    disponible: true,
    kilometrage: 12000,
    puissance: "245 ch",
    places: 5,
    portes: 3,
    description: "La Golf GTI est une icône de la sportivité accessible. Compacte, agile et puissante, elle offre des sensations de conduite uniques."
  },
  {
    id: 5,
    type: "vente",
    marque: "Peugeot",
    modele: "308",
    annee: 2022,
    prix: 28000,
    carburant: "Diesel",
    boite: "Automatique",
    image: peugeotImg,
    disponible: false,
    kilometrage: 35000,
    puissance: "130 ch",
    places: 5,
    portes: 5,
    description: "La Peugeot 308 séduit par son design audacieux et son i-Cockpit innovant. Une berline française moderne et efficace."
  },
  {
    id: 6,
    type: "location",
    marque: "BMW",
    modele: "Série 5",
    annee: 2023,
    prix: 180,
    carburant: "Hybride",
    boite: "Automatique",
    image: bmwImg,
    disponible: true,
    kilometrage: 5000,
    puissance: "286 ch",
    places: 5,
    portes: 4,
    description: "La BMW Série 5 représente le summum du confort et de la technologie. Idéale pour les longs trajets et les occasions spéciales."
  },
  {
    id: 7,
    type: "vente",
    marque: "Mercedes",
    modele: "Classe E",
    annee: 2021,
    prix: 55000,
    carburant: "Diesel",
    boite: "Automatique",
    image: mercedesImg,
    disponible: true,
    kilometrage: 45000,
    puissance: "220 ch",
    places: 5,
    portes: 4,
    description: "La Mercedes Classe E est l'expression même du prestige. Son habitacle luxueux et ses équipements haut de gamme garantissent un confort absolu."
  },
  {
    id: 8,
    type: "location",
    marque: "Audi",
    modele: "A6",
    annee: 2022,
    prix: 150,
    carburant: "Électrique",
    boite: "Automatique",
    image: audiImg,
    disponible: false,
    kilometrage: 18000,
    puissance: "340 ch",
    places: 5,
    portes: 4,
    description: "L'Audi A6 e-tron représente l'avenir de la mobilité premium. Zéro émission, performances maximales et technologie de pointe."
  }
];

// Fonctions utilitaires
export const getCarById = (id: number): Car | undefined => {
  return carsData.find(car => car.id === id);
};

export const getCarsByType = (type: "location" | "vente"): Car[] => {
  return carsData.filter(car => car.type === type);
};

export const getAvailableCars = (): Car[] => {
  return carsData.filter(car => car.disponible);
};

export const getUniqueMarques = (): string[] => {
  return [...new Set(carsData.map(car => car.marque))];
};

export const getUniqueCarburants = (): string[] => {
  return [...new Set(carsData.map(car => car.carburant))];
};

// Prix formaté
export const formatPrice = (price: number, type: "location" | "vente"): string => {
  if (type === "location") {
    return `${price}€/jour`;
  }
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(price);
};
