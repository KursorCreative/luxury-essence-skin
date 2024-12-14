const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center">
        <div className="absolute inset-0 bg-secondary/60"></div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fadeIn">
          Pamper Yourself with Laine Luxuries
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          Where elegance meets self-care
        </p>
        <button className="btn-primary text-lg animate-fadeIn" style={{ animationDelay: "0.4s" }}>
          Browse Our Collections
        </button>
      </div>
    </div>
  );
};

export default Hero;