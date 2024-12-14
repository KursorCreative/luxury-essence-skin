import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
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