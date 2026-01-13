import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  User,
  MessageSquare
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 1 23 45 67 89",
    href: "tel:+33123456789"
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@formacity.fr",
    href: "mailto:contact@formacity.fr"
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "123 Avenue des Champs-Élysées, 75008 Paris",
    href: "#"
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun-Sam: 9h-19h",
    href: "#"
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Message envoyé avec succès !");

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-card to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Contactez-<span className="text-gradient">nous</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Une question ? Un projet ? Notre équipe est à votre disposition 
              pour vous accompagner dans vos démarches.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding pt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Nos coordonnées</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-card border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2158140697064!2d2.295626715674168!3d48.87377927928934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc5a8377bf5%3A0xad94e6c3ce2b0b9!2sAv.%20des%20Champs-%C3%89lys%C3%A9es%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1623456789"
                  className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  allowFullScreen
                  loading="lazy"
                  title="Localisation Formacity"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-strong rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-semibold mb-2">Envoyez-nous un message</h2>
                <p className="text-muted-foreground mb-8">
                  Remplissez le formulaire ci-dessous, nous vous répondrons sous 24h.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-success" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Message envoyé !</h3>
                    <p className="text-muted-foreground">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Nom */}
                      <div className="space-y-2">
                        <Label htmlFor="nom" className="text-sm">
                          Nom complet <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="nom"
                            type="text"
                            placeholder="Votre nom"
                            value={formData.nom}
                            onChange={(e) => handleChange("nom", e.target.value)}
                            className="pl-10 bg-secondary border-border"
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="votre@email.com"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className="pl-10 bg-secondary border-border"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Téléphone */}
                      <div className="space-y-2">
                        <Label htmlFor="telephone" className="text-sm">
                          Téléphone
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="telephone"
                            type="tel"
                            placeholder="06 12 34 56 78"
                            value={formData.telephone}
                            onChange={(e) => handleChange("telephone", e.target.value)}
                            className="pl-10 bg-secondary border-border"
                          />
                        </div>
                      </div>

                      {/* Sujet */}
                      <div className="space-y-2">
                        <Label htmlFor="sujet" className="text-sm">
                          Sujet <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={formData.sujet}
                          onValueChange={(value) => handleChange("sujet", value)}
                          required
                        >
                          <SelectTrigger id="sujet" className="bg-secondary border-border">
                            <SelectValue placeholder="Choisir un sujet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="achat">Achat d'un véhicule</SelectItem>
                            <SelectItem value="location">Location d'un véhicule</SelectItem>
                            <SelectItem value="estimation">Estimation de mon véhicule</SelectItem>
                            <SelectItem value="financement">Financement</SelectItem>
                            <SelectItem value="autre">Autre demande</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea
                          id="message"
                          placeholder="Décrivez votre demande..."
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          className="pl-10 min-h-[150px] bg-secondary border-border resize-none"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="btn-hero w-full flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
