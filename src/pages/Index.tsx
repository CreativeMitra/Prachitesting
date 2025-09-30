import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Teachers from "@/components/Teachers";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Features />
      <Teachers />
      <Testimonials />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
