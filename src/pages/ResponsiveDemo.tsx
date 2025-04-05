
import React from "react";
import DarkNavbar from "@/components/DarkNavbar";
import ImageCarousel from "@/components/ImageCarousel";
import ResponsiveContent from "@/components/ResponsiveContent";
import Footer from "@/components/Footer";

const ResponsiveDemo = () => {
  // Images for the carousel
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Person using MacBook Pro"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Monitor showing Java programming"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Gray laptop computer"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Macro photography of black circuit board"
    },
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "Woman working on laptop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <DarkNavbar />
      
      {/* Hero section with carousel */}
      <section className="pt-16 md:pt-20" id="gallery">
        <div className="container-custom mt-8 md:mt-12">
          <div className="max-w-5xl mx-auto">
            <ImageCarousel 
              images={carouselImages} 
              interval={6000}
              aspectRatio={21/9}
            />
          </div>
          
          <div className="text-center mt-12 md:mt-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Responsive Web Design</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of responsive layout techniques with proper aspect ratios and optimized images.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content section */}
      <ResponsiveContent />
      
      {/* Contact section */}
      <section className="py-12 md:py-20 bg-gray-900" id="contact">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <AspectRatio ratio={1/1} className="bg-gray-800">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                    alt="Contact us" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="mb-6 text-gray-300">Fill out the form below to get in touch with our team.</p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span>info@responsivedemo.com</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span>123 Web Design St, San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Import AspectRatio and icons
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Phone, Mail, MapPin } from "lucide-react";

export default ResponsiveDemo;
