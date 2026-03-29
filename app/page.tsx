import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SavoirFaire from "@/components/SavoirFaire";
import About from "@/components/About";
import Realisations from "@/components/Realisations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SavoirFaire />
        <About />
        <Realisations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
