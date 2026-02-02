import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-20">
      <Header />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
