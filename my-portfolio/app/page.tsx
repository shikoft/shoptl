import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import SectionTabs from "../components/SectionTabs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
//import Products from "../components/Products"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Hero />
        <About />
        <SectionTabs />
        {/* <Products /> */}
        {/*<WorksSection /> */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}





