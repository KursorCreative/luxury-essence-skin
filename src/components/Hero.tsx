import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      title: "Pamper Yourself with Laine Luxuries",
      subtitle: "Where elegance meets self-care",
      cta: "Browse Our Collections",
    },
    {
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
      title: "Luxury Spa Treatments",
      subtitle: "Indulge in pure relaxation",
      cta: "Book Your Session",
    },
    {
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
      title: "Premium Beauty Products",
      subtitle: "Discover our curated collection",
      cta: "Shop Now",
    },
  ];

  return (
    <div className="relative h-[70vh]">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-secondary/60"></div>
                </div>
                
                <div className="relative container mx-auto px-4 text-center text-white z-10">
                  <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fadeIn">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                    {slide.subtitle}
                  </p>
                  <button 
                    className="btn-primary text-lg animate-fadeIn" 
                    style={{ animationDelay: "0.4s" }}
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 text-white border-white hover:bg-white/20 hover:text-white" />
        <CarouselNext className="right-4 text-white border-white hover:bg-white/20 hover:text-white" />
      </Carousel>
    </div>
  );
};

export default Hero;