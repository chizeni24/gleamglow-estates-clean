
import React, { useEffect, useState } from "react";
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
  const [activePage, setActivePage] = useState<string>("home");
  
  useEffect(() => {
    // Handle hash links for smooth scrolling
    const hash = location.hash;
    if (hash) {
      // Set active page based on hash
      setActivePage(hash.replace('#', ''));
      
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
      setActivePage("home");
    }
  }, [location.hash]);
  
  // Content sections with their IDs for navigation
  const sections = [
    { id: "home", component: <Hero /> },
    { id: "about", component: <About /> },
    { id: "our-story", component: <OurStory /> },
    { id: "services", component: <Services /> },
    { id: "blog", component: <Blog /> },
    { id: "testimonials", component: <Testimonials /> },
    { id: "contact", component: <Contact /> }
  ];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main content with improved spacing */}
      <div className="space-y-6 md:space-y-12">
        {sections.map((section) => (
          <div 
            key={section.id} 
            id={section.id}
            className={`section-container ${activePage === section.id ? 'active-section' : ''}`}
          >
            {section.component}
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
