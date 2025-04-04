
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Victoria L.",
    role: "Homeowner in Pacific Heights",
    content: "GleamGlow has transformed my home care routine. Their attention to detail is unmatched, and I appreciate how they remember my preferences from one visit to the next.",
    rating: 5
  },
  {
    name: "Jonathan W.",
    role: "Interior Designer",
    content: "I recommend GleamGlow to all my clients. They understand how to care for high-end finishes and materials, which is essential for preserving the integrity of luxury interiors.",
    rating: 5
  },
  {
    name: "Sophia R.",
    role: "Estate Manager",
    content: "The GleamGlow team is professional, trustworthy, and thorough. They've maintained our property to the highest standards, which allows me to focus on other aspects of estate management.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-gray-700">
            We're proud to have earned the trust of discerning homeowners who value exceptional cleaning services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
