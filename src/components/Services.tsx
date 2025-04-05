
import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

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

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Premium Services</h2>
          <p className="text-gray-700">
            We offer a range of specialized cleaning services designed to meet the unique needs of luxury homes. Each service is fully customizable to your specific requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              to={`/booking?service=${encodeURIComponent(service.title)}`}
              key={index}
              className={`rounded-lg p-8 transition-all duration-300 hover:shadow-xl ${
                service.highlight 
                  ? "border-2 border-gold bg-white shadow-lg" 
                  : "border border-gray-200 bg-white shadow"
              } group cursor-pointer`}
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
                <span className="inline-block text-gold font-medium group-hover:opacity-100 transition-opacity duration-300">
                  Book This Service →
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/booking" className="btn-gold">Schedule a Service</Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
