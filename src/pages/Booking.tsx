import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams, useNavigate } from "react-router-dom";
import { QuickQuote } from "@/components/QuickQuote";

type Step = {
  id: string;
  title: string;
  description: string;
  fields: React.ReactNode;
};

const BookingPage = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const serviceParam = searchParams.get('service');
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    service: serviceParam || "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
    bedrooms: "1",
    bathrooms: "1",
    kitchens: "1",
    livingAreas: "1",
    squareFootage: "",
    cleaningFrequency: "one-time",
    pets: "no",
    specialRequirements: "",
  });

  useEffect(() => {
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
      if (currentStep === 0) {
        setCurrentStep(1);
      }
    }
  }, [serviceParam, currentStep]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    nextStep();
    navigate(`/booking?service=${encodeURIComponent(service)}`);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Booking Requested",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  };

  const services = [
    {
      title: "Signature Clean",
      description: "Our comprehensive cleaning service that covers every aspect of your home with meticulous attention to detail.",
      highlight: true
    },
    {
      title: "Move-In/Move-Out",
      description: "Start fresh in your new home or leave your previous residence in impeccable condition.",
      highlight: false
    },
    {
      title: "Special Occasions",
      description: "Prepare your home for entertaining guests with our premium pre-event cleaning service.",
      highlight: false
    }
  ];

  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  const steps: Step[] = [
    {
      id: "service",
      title: "Select Service",
      description: "Choose the service that best fits your needs",
      fields: (
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceSelect(service.title)}
              onMouseEnter={() => setHoveredService(service.title)}
              onMouseLeave={() => setHoveredService(null)}
              className={`text-left rounded-lg p-8 transition-all duration-300 hover:shadow-xl border ${
                hoveredService === service.title ? "border-gold" : "border-gray-200"
              } bg-white shadow ${formData.service === service.title ? "ring-2 ring-gold" : ""}`}
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              {service.highlight && (
                <div className="mt-4 text-center">
                  <span className="inline-block px-4 py-1 bg-gold-light/10 text-gold font-medium rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
            </button>
          ))}
        </div>
      )
    },
    {
      id: "datetime",
      title: "Select Date & Time",
      description: "Choose your preferred date and time for the service",
      fields: (
        <div className="space-y-6 mt-6">
          <div>
            <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-lg font-medium text-gray-700 mb-2">
              Time
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="">Select a time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
          </div>
        </div>
      )
    },
    {
      id: "propertyDetails",
      title: "Property Details",
      description: "Tell us about your property",
      fields: (
        <div className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="bedrooms" className="block text-lg font-medium text-gray-700 mb-2">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
                <option value="5">5+ Bedrooms</option>
              </select>
            </div>
            <div>
              <label htmlFor="bathrooms" className="block text-lg font-medium text-gray-700 mb-2">
                Bathrooms
              </label>
              <select
                id="bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="1">1 Bathroom</option>
                <option value="2">2 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
                <option value="4">4 Bathrooms</option>
                <option value="5">5+ Bathrooms</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="kitchens" className="block text-lg font-medium text-gray-700 mb-2">
                Kitchens
              </label>
              <select
                id="kitchens"
                name="kitchens"
                value={formData.kitchens}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="1">1 Kitchen</option>
                <option value="2">2 Kitchens</option>
                <option value="3">3+ Kitchens</option>
              </select>
            </div>
            <div>
              <label htmlFor="livingAreas" className="block text-lg font-medium text-gray-700 mb-2">
                Living Areas
              </label>
              <select
                id="livingAreas"
                name="livingAreas"
                value={formData.livingAreas}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="1">1 Living Area</option>
                <option value="2">2 Living Areas</option>
                <option value="3">3 Living Areas</option>
                <option value="4">4+ Living Areas</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="squareFootage" className="block text-lg font-medium text-gray-700 mb-2">
              Approximate Square Footage
            </label>
            <input
              type="text"
              id="squareFootage"
              name="squareFootage"
              value={formData.squareFootage}
              onChange={handleInputChange}
              placeholder="e.g., 1500"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          
          <div>
            <label htmlFor="cleaningFrequency" className="block text-lg font-medium text-gray-700 mb-2">
              Cleaning Frequency
            </label>
            <select
              id="cleaningFrequency"
              name="cleaningFrequency"
              value={formData.cleaningFrequency}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="one-time">One-time Service</option>
              <option value="weekly">Weekly</option>
              <option value="bi-weekly">Bi-weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="pets" className="block text-lg font-medium text-gray-700 mb-2">
              Do you have pets?
            </label>
            <select
              id="pets"
              name="pets"
              value={formData.pets}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="no">No</option>
              <option value="dogs">Dogs</option>
              <option value="cats">Cats</option>
              <option value="both">Both Dogs and Cats</option>
              <option value="other">Other Pets</option>
            </select>
          </div>
        </div>
      )
    },
    {
      id: "contact",
      title: "Your Information",
      description: "Please provide your contact details",
      fields: (
        <div className="space-y-6 mt-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
        </div>
      )
    },
    {
      id: "address",
      title: "Service Address",
      description: "Where would you like us to provide the service?",
      fields: (
        <div className="space-y-6 mt-6">
          <div>
            <label htmlFor="address" className="block text-lg font-medium text-gray-700 mb-2">
              Full Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label htmlFor="notes" className="block text-lg font-medium text-gray-700 mb-2">
              Special Instructions
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={3}
              placeholder="Tell us about any specific areas that need attention or any other special requirements"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label htmlFor="specialRequirements" className="block text-lg font-medium text-gray-700 mb-2">
              Additional Services Needed
            </label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleInputChange}
              rows={3}
              placeholder="Any additional services like window cleaning, carpet cleaning, etc."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
        </div>
      )
    },
    {
      id: "confirm",
      title: "Confirm Your Booking",
      description: "Please review your information before submitting",
      fields: (
        <div className="space-y-6 mt-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Service</p>
              <p className="font-medium">{formData.service}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="font-medium">{formData.date} at {formData.time}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Property Size</p>
              <p className="font-medium">{formData.bedrooms} Bedroom(s), {formData.bathrooms} Bathroom(s)</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Cleaning Frequency</p>
              <p className="font-medium">
                {formData.cleaningFrequency === "one-time" ? "One-time Service" :
                 formData.cleaningFrequency === "weekly" ? "Weekly Service" :
                 formData.cleaningFrequency === "bi-weekly" ? "Bi-weekly Service" : "Monthly Service"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{formData.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{formData.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{formData.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="font-medium">{formData.address}</p>
            </div>
          </div>
          
          {formData.notes && (
            <div>
              <p className="text-sm text-gray-500">Special Instructions</p>
              <p className="font-medium">{formData.notes}</p>
            </div>
          )}
          
          {formData.specialRequirements && (
            <div>
              <p className="text-sm text-gray-500">Additional Services</p>
              <p className="font-medium">{formData.specialRequirements}</p>
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="container-custom py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Luxury Clean</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your premium cleaning service in a few simple steps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => (
                <div 
                  key={step.id}
                  className={cn(
                    "flex flex-col items-center",
                    {"opacity-50": index !== currentStep}
                  )}
                >
                  <div 
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                      index < currentStep 
                        ? "bg-gold text-white" 
                        : index === currentStep 
                          ? "bg-white text-gold border-2 border-gold" 
                          : "bg-gray-100 text-gray-400 border border-gray-300"
                    )}
                  >
                    {index < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className="text-xs mt-2 hidden md:block">{step.title}</span>
                </div>
              ))}
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute h-full bg-gold transition-all duration-500"
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 transition-all duration-500">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">{steps[currentStep].title}</h2>
                <p className="text-gray-600 mt-2">{steps[currentStep].description}</p>
              </div>
              
              <div className="min-h-[300px]">
                {steps[currentStep].fields}
              </div>
              
              <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
                {currentStep > 0 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 0 && !formData.service) ||
                      (currentStep === 1 && (!formData.date || !formData.time)) ||
                      (currentStep === 2 && !formData.bedrooms) ||
                      (currentStep === 3 && (!formData.name || !formData.email || !formData.phone)) ||
                      (currentStep === 4 && !formData.address)
                    }
                    className="flex items-center bg-gold text-white px-6 py-3 rounded-md hover:bg-gold-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center bg-gold text-white px-6 py-3 rounded-md hover:bg-gold-dark transition-colors duration-300"
                  >
                    Confirm Booking
                    <Check className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
