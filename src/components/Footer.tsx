import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl mb-4">Laine Luxuries</h3>
            <p className="text-white/80">
              Where luxury meets self-care. Experience the finest in beauty and wellness services.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Products</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Follow us on Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Follow us on Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors" aria-label="Follow us on Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/80">
          <p>© 2024 Laine Luxuries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;