import ServiceCard from "./ServiceCard";
import { Heart, Scissors, Palette, HandMetal, Gift, Smile } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Facial Treatments",
      description: "Hydrate and rejuvenate with our signature facial.",
      icon: Smile,
    },
    {
      title: "Hair Styling",
      description: "Transform your look with our expert styling services.",
      icon: Scissors,
    },
    {
      title: "Makeup Sessions",
      description: "Professional makeup for any occasion.",
      icon: Palette,
    },
    {
      title: "Spa Manicure",
      description: "Pamper your hands with our luxury treatment.",
      icon: HandMetal,
    },
    {
      title: "Luxury Pedicure",
      description: "Relax and refresh with our premium pedicure.",
      icon: Heart,
    },
    {
      title: "Gift Packages",
      description: "Perfect presents for your loved ones.",
      icon: Gift,
    },
  ];

  return (
    <section className="py-20 bg-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-secondary/80 mb-12 max-w-2xl mx-auto">
          Discover our range of luxury beauty and wellness services designed to help you look and feel your best.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;