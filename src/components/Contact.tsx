
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { GoldButton } from "@/components/ui/gold-button";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log(formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll get back to you shortly.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 title-underline">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              Ready to experience the GleamGlow difference? Contact us for a personalized consultation or to schedule your first service.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-gold mr-4 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Our Location</h4>
                  <p className="text-gray-600">1234 Premium Lane, Austin, TX 78701</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-gold mr-4 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">(512) 555-0123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-gold mr-4 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">contact@gleamglow.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-gold mr-4 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your cleaning needs"
                  rows={5}
                  required
                  className="w-full"
                />
              </div>
              
              <GoldButton 
                type="submit" 
                variant="solid"
                size="md"
                showShine={true}
                className="w-full"
              >
                Send Message
              </GoldButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
