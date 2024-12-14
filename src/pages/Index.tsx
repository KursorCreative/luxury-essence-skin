import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-accent focus:text-white focus:p-4 focus:m-4 focus:rounded-md"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <div className="py-20">
          <Services />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;