import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <article 
      className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1"
      tabIndex={0}
    >
      <div 
        className="w-16 h-16 mx-auto mb-4 text-accent"
        role="img"
        aria-label={`${title} icon`}
      >
        <Icon size={64} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-3 text-secondary">
        {title}
      </h3>
      <p className="text-secondary/80 mb-4">
        {description}
      </p>
      <button 
        className="text-accent hover:text-accent-light transition-colors duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 p-2 rounded-md"
        aria-label={`Learn more about ${title}`}
      >
        Learn More <span aria-hidden="true">→</span>
      </button>
    </article>
  );
};

export default ServiceCard;