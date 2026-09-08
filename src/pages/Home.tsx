import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import ServicesSection from "../sections/ServicesSection";
import FormationsSection from "../sections/FormationsSection";
import WhyEduNovaSection from "../sections/WhyEduNovaSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/layout/WhatsAppButton";

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />

        <ServicesSection />

        <FormationsSection />

        <WhyEduNovaSection />

        <AboutSection />

        <ContactSection />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}

export default Home;