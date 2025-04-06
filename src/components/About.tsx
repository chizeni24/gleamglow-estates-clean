
import React from "react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 title-underline">About GleamGlow</h2>
            <p className="text-gray-700 mb-6">
              Founded with a passion for perfection, GleamGlow specializes in providing exceptional cleaning services for homes that deserve the best. We understand that your residence is more than just a space—it's a reflection of your lifestyle and taste.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of carefully selected cleaning artisans is trained to handle premium interiors with the care and attention they deserve. We use only high-quality, eco-friendly cleaning products that preserve the integrity of your fine surfaces while delivering immaculate results.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-gold font-bold text-xl mb-2">10+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-gold font-bold text-xl mb-2">500+</h3>
                <p className="text-gray-600">Happy Homes Served</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Premium home interior" 
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-gray-800 font-playfair italic">"Excellence is in the details."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
