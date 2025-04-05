
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OurStory from "@/components/OurStory";
import Blog from "@/components/Blog";

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle hash links for smooth scrolling
    const hash = location.hash;
    if (hash) {
      // Slight delay to ensure the DOM is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Scroll to top if no hash
      window.scrollTo(0, 0);
    }
  }, [location.hash]);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <OurStory />
      <Services />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
