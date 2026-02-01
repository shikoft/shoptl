import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Hero from "../components/Hero";
import About from "../components/About";
import WorksSection from "../components/Works/WorksSection";
import Contact from "../components/Contact";
//import Products from "../components/Products"
import Footer from "../components/Footer";
import SectionTabs from "../components/SectionTabs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <Tabs />
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

