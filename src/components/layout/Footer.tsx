import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.jpg";

const footerLinks = {
  services: [
    { name: "Acheter une voiture", href: "/vente" },
    { name: "Louer une voiture", href: "/location" },
    { name: "Estimation gratuite", href: "/contact" },
    { name: "Financement", href: "/contact" },
  ],
  company: [
    { name: "À propos", href: "/a-propos" },
    { name: "Notre équipe", href: "/a-propos" },
    { name: "Témoignages", href: "/#temoignages" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
    { name: "CGV", href: "#" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="Formacity" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Votre partenaire de confiance pour l'achat et la location de véhicules premium.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+33123456789" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                +33 1 23 45 67 89
              </a>
              <a 
                href="mailto:contact@formacity.fr" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                contact@formacity.fr
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Avenue des Champs-Élysées<br />75008 Paris, France</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Légal</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-foreground mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={`Suivez-nous sur ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Formacity. Tous droits réservés.
            </p>
            <p className="text-sm text-muted-foreground">
              Towards Success 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
