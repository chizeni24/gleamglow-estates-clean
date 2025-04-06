
import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface ServiceAreaProps {
  serviceAreas: Array<{
    name: string;
    available: boolean;
  }>;
}

const ServiceAreas = ({ serviceAreas }: ServiceAreaProps) => {
  return (
    <div className="mt-28" id="service-areas">
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
  );
};

export default ServiceAreas;
