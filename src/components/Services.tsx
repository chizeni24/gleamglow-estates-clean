
import React, { useState, useEffect } from "react";
import { Check, MapPin, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Signature Clean",
    description: "Our comprehensive cleaning service that covers every aspect of your home with meticulous attention to detail.",
    features: [
      "Deep cleaning of all rooms",
      "Special attention to high-touch surfaces",
      "Premium eco-friendly products",
      "Detailed cleaning of bathrooms and kitchen",
      "Customized to your specific needs"
    ],
    highlight: true
  },
  {
    title: "Move-In/Move-Out",
    description: "Start fresh in your new home or leave your previous residence in impeccable condition.",
    features: [
      "Deep cleaning of all surfaces",
      "Cabinet and drawer cleaning",
      "Appliance cleaning",
      "Window treatment cleaning",
      "Floor polishing and treatment"
    ],
    highlight: false
  },
  {
    title: "Special Occasions",
    description: "Prepare your home for entertaining guests with our premium pre-event cleaning service.",
    features: [
      "Priority scheduling",
      "Focus on entertainment areas",
      "Crystal and fine china cleaning",
      "Linen preparation",
      "Post-event cleanup available"
    ],
    highlight: false
  }
];

const serviceAreas = [
  { name: "Downtown Austin", available: true },
  { name: "West Lake Hills", available: true },
  { name: "Rollingwood", available: true },
  { name: "Tarrytown", available: true },
  { name: "Barton Creek", available: true },
  { name: "Bee Cave", available: true },
  { name: "Lakeway", available: true },
  { name: "Westlake", available: true },
  { name: "Dripping Springs", available: true },
  { name: "North Austin", available: true },
  { name: "Round Rock", available: true },
  { name: "Cedar Park", available: true }
];

const blogPosts = [
  {
    title: "5 Essential Tips for Maintaining Marble Countertops",
    excerpt: "Learn how to keep your premium marble surfaces pristine with these expert tips.",
    category: "Maintenance",
    featured: true,
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "The Ultimate Guide to Eco-Friendly Cleaning Products",
    excerpt: "Discover premium, environmentally responsible cleaning solutions for your home.",
    category: "Products",
    featured: false,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "How to Prepare Your Home for a Professional Cleaning",
    excerpt: "Maximize the results of your cleaning service with these simple preparations.",
    category: "Tips",
    featured: false,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Seasonal Deep Cleaning Checklist for Quality Homes",
    excerpt: "Stay ahead of maintenance with our comprehensive seasonal cleaning guide.",
    category: "Guides",
    featured: false,
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/booking?service=${encodeURIComponent(service.title)}`}
      key={index}
      className={`rounded-lg p-8 transition-all duration-300 ${
        service.highlight 
          ? "border-2 border-gold bg-white shadow-lg" 
          : "border border-gray-200 bg-white shadow"
      } group cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '',
      }}
    >
      <h3 className="text-2xl font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
      <p className="text-gray-700 mb-6">{service.description}</p>
      <ul className="space-y-3">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <Check className="text-gold mr-2 flex-shrink-0 mt-1" size={18} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      {service.highlight && (
        <div className="mt-8 text-center">
          <span className="inline-block px-4 py-1 bg-gold-light/10 text-gold font-medium rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      <div className="mt-6 text-center">
        <div className={cn(
          "inline-block text-gold font-medium transition-all duration-300",
          isHovered ? "opacity-100" : "opacity-80"
        )}>
          Select This Service 
          <span className={cn(
            "ml-2 transition-transform duration-300",
            isHovered ? "translate-x-1" : "translate-x-0"
          )}>→</span>
        </div>
      </div>
    </Link>
  );
};

const Services = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [count, setCount] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const totalServicesCompleted = 936;
  const totalSteps = 4;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Counter animation
    if (count < totalServicesCompleted) {
      const timer = setTimeout(() => {
        setCount(prev => {
          const increment = Math.floor((totalServicesCompleted - prev) / 10) + 1;
          return Math.min(prev + increment, totalServicesCompleted);
        });
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [count, totalServicesCompleted]);

  useEffect(() => {
    // Progress bar animation
    setProgress((currentStep / totalSteps) * 100);
  }, [currentStep]);

  const handleContinue = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const categories = ['All', 'Maintenance', 'Products', 'Tips', 'Guides'];
  
  const filteredPosts = blogPosts.filter(post => 
    (activeCategory === 'All' || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="services" className="section-padding">
      {/* Fixed progress bar */}
      <div className={cn(
        "w-full transition-all duration-300 z-20", 
        isScrolled ? "fixed top-0 left-0 bg-white shadow-md py-2" : ""
      )}>
        <div className="container-custom">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">Service Selection</h3>
            <span className="text-gold">{currentStep} of {totalSteps}</span>
          </div>
          <Progress 
            value={progress} 
            className="h-2 bg-gray-200 mb-6"
          />
        </div>
      </div>
      
      <div className="container-custom mt-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Premium Services</h2>
          <p className="text-gray-700 text-lg">
            We offer a range of specialized cleaning services designed to meet the unique needs of your home. Each service is fully customizable to your specific requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard service={service} index={index} key={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={handleContinue}
            className="btn-gold relative overflow-hidden group"
          >
            <span className="relative z-10">Continue to Next Step</span>
            <span className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 bg-white/20 scale-x-0 group-active:scale-x-100 origin-left transition-transform duration-500"></span>
          </button>
        </div>
        
        {/* Counter Animation */}
        <div className="mt-28 py-12 bg-gray-50 rounded-lg">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-2">
              <span className={cn(
                "transition-all duration-500", 
                count === totalServicesCompleted ? "text-gold" : ""
              )}>
                {count.toLocaleString()}
              </span>
            </h3>
            <p className="text-xl text-gray-700">Exceptional Homes Served Since 2010</p>
          </div>
        </div>
        
        {/* Blog Section */}
        <div className="mt-28">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold">Cleaning Tips & Insights</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
            {categories.map(category => (
              <button
                key={category}
                className={cn(
                  "px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-300",
                  activeCategory === category 
                    ? "bg-gold text-white" 
                    : "bg-gray-100 hover:bg-gray-200"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPosts.map((post, index) => (
              <div 
                key={index}
                className={cn(
                  "rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2",
                  post.featured ? "col-span-2 row-span-2 md:col-span-2" : ""
                )}
              >
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 px-3 py-1 bg-gold text-white text-xs font-semibold rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-xl mb-2">{post.title}</h4>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <Link to={`/blog/article-${index+1}`} className="mt-4 inline-block text-gold font-medium hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Service Areas */}
        <div className="mt-28">
          <h3 className="text-3xl font-bold mb-8 text-center">Service Areas</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 h-96">
              {/* This would be replaced with an actual interactive map */}
              <div className="bg-white h-full rounded flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-gold mx-auto mb-4" />
                  <p className="text-gray-500">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Austin Areas We Service</h4>
              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.map((area, index) => (
                  <Link
                    key={index}
                    to={`/booking?area=${encodeURIComponent(area.name)}`}
                    className="flex items-center p-3 rounded-md border border-gray-200 transition-colors duration-300 hover:border-gold hover:bg-gold/5"
                  >
                    <MapPin size={18} className="text-gold mr-2" />
                    <span>{area.name}</span>
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                <h5 className="font-bold mb-2">Not sure if we service your area?</h5>
                <p className="text-gray-600 mb-4">Contact us to verify our availability in your location.</p>
                <Link to="/contact" className="text-gold font-medium hover:underline">
                  Check Availability →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
