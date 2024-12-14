import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center" aria-label="Laine Luxuries Home">
            <h1 className="text-2xl font-playfair font-bold">
              <span className="text-secondary">Laine</span>
              <span className="text-accent"> Luxuries</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Contact</a>
            <button className="btn-primary">Book Appointment</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#" className="nav-link">Home</a>
              <a href="#" className="nav-link">Products</a>
              <a href="#" className="nav-link">Services</a>
              <a href="#" className="nav-link">About</a>
              <a href="#" className="nav-link">Blog</a>
              <a href="#" className="nav-link">Contact</a>
              <button className="btn-primary w-full text-center">Book Appointment</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;