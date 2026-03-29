import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SavoirFaire from "@/components/SavoirFaire";
import Values from "@/components/Values";
import About from "@/components/About";
import Realisations from "@/components/Realisations";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <SavoirFaire />
        <Values />
        <About />
        <Realisations />
        <Testimonials />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
