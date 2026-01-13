import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Car, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Acheter", href: "/vente" },
  { name: "Louer", href: "/location" },
  { name: "À propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <nav className="container mx-auto px-4 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-foreground">LWESS</span>
              <span className="text-primary"> PRODUCTION</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`link-underline py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link to="/contact">
              <Button className="btn-hero flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Nous contacter
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden animate-fade-in pb-6">
            <div className="flex flex-col gap-4 pt-4 border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="btn-hero w-full mt-4 flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
