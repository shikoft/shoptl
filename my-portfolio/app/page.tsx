import Hero from "../components/Hero";
import About from "../components/About";
import WorksSection from "../components/Works/WorksSection";
import Contact from "../components/Contact";
//import Products from "../components/Products"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Products /> */}
      <WorksSection />
      <Contact />
      <Footer />
    </>
  );
}