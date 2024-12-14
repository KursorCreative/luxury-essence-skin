import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 mx-auto mb-4 text-accent">
        <Icon size={64} />
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-3 text-secondary">{title}</h3>
      <p className="text-secondary/80 mb-4">{description}</p>
      <button className="text-accent hover:text-accent-light transition-colors duration-300 font-semibold">
        Learn More →
      </button>
    </div>
  );
};

export default ServiceCard;