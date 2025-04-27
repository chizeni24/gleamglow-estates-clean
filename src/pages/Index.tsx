
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import SteamDifference from "@/components/SteamDifference";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import OurStory from "@/components/OurStory";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import ScrollIndicator from "@/components/ScrollIndicator";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState<string>("home");
  
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setActivePage(hash.replace('#', ''));
      
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
      setActivePage("home");
    }
  }, [location.hash]);
  
  const sections = [
    { id: "home", component: <Hero /> },
    { id: "about", component: <About /> },
    { id: "our-story", component: <OurStory /> },
    { id: "steam", component: <SteamDifference /> },
    { id: "process", component: <ProcessTimeline /> },
    { id: "services", component: <Services /> },
    { id: "faq", component: <FAQ /> },
    { id: "blog", component: <Blog /> },
    { id: "testimonials", component: <Testimonials /> },
    { id: "contact", component: <Contact /> }
  ];
  
  return (
    <div className="min-h-screen">
      <ScrollIndicator />
      <Navbar />
      
      <div className="space-y-12 md:space-y-20">
        {sections.map((section) => (
          <div 
            key={section.id} 
            id={section.id}
            className={`section-container mb-8 md:mb-16 ${activePage === section.id ? 'active-section' : ''}`}
          >
            {section.component}
          </div>
        ))}
      </div>
      
      <div className="fixed bottom-0 inset-x-0 md:hidden p-3 bg-gold-dark/95 backdrop-blur-md z-50">
        <button 
          onClick={() => navigate('/booking')}
          className="w-full btn-gold"
        >
          Book My Steam Clean
        </button>
      </div>
      
      <BackToTop />
      <Footer />
    </div>
  );
};

export default Index;
