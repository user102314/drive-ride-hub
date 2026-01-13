import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Directrice Marketing",
    content: "Service exceptionnel ! J'ai trouvé ma BMW Série 3 en parfait état. L'équipe a été très professionnelle et le processus d'achat transparent.",
    rating: 5,
    avatar: "MD",
  },
  {
    id: 2,
    name: "Thomas Bernard",
    role: "Entrepreneur",
    content: "La location de véhicules est d'une simplicité remarquable. Véhicules toujours impeccables et disponibilité excellente. Je recommande vivement.",
    rating: 5,
    avatar: "TB",
  },
  {
    id: 3,
    name: "Sophie Martin",
    role: "Médecin",
    content: "Après plusieurs mauvaises expériences ailleurs, j'ai enfin trouvé un concessionnaire de confiance. Prix justes, garantie solide, équipe à l'écoute.",
    rating: 5,
    avatar: "SM",
  },
];

export function TestimonialsSection() {
  return (
    <section 
      id="temoignages" 
      className="section-padding relative overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Témoignages
          </span>
          <h2 id="testimonials-title" className="heading-display text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            Ce que disent nos <span className="text-gradient">clients</span>
          </h2>
          <p className="text-muted-foreground">
            La satisfaction de nos clients est notre priorité. 
            Découvrez leurs retours d'expérience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="card-premium p-8 relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
