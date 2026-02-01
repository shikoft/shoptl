import Navbar from "../components/Navbar";
import SectionTabs from "../components/SectionTabs";
import Hero from "../components/Hero";
import About from "../components/About";
import WorksSection from "../components/Works/WorksSection";
import Contact from "../components/Contact";
//import Products from "../components/Products"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
      </main>
      <Hero />
      <About />
      {/* <Products /> */}
      <WorksSection />
      <SectionTabs />
      <Contact />
      <Footer />
    </>
  );

}




