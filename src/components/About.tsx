
import React from "react";
const About = () => {
  return <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 title-underline">
              About <span className="text-gold-lighter">Gleam</span><span className="text-gold-lighter">Glow</span>
            </h2>
            <div className="text-gray-700 space-y-6">
              <p className="text-lg">At GleamGlow, we turn clean into an experience—crisp surfaces, subtle eucalyptus steam, and details that simply feel better. Our eco-smart approach elevates any space from everyday to effortlessly polished, protecting what you value most without a single hidden extra.</p>
              <p className="At **GleamGlow**, we turn clean into an experience\u2014crisp surfaces, subtle eucalyptus steam, and details that simply feel better. Our eco-smart approach elevates any space from everyday to effortlessly polished, protecting what you value most without a single hidden extra.\n\nadd that and ensure to have that gleamglow color format as well\n">
                At <span className="text-gold-lighter font-medium">Gleam</span>, we redefine luxury with every sweep, polish, and shine. Your space becomes a sanctuary — radiant, refined, and undeniably yours. Our expert team transforms the everyday into the extraordinary, using only the finest eco-conscious products to protect what you value most.
              </p>
              <p className="font-medium">
                Because your home deserves more than clean.
                <br />
                It deserves <span className="text-gold-lighter font-playfair">GleamGlow</span>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-gold-lighter font-bold text-xl mb-2">10+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
                <h3 className="text-gold-lighter font-bold text-xl mb-2">500+</h3>
                <p className="text-gray-600">Happy Homes Served</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Premium home interior" className="rounded-lg shadow-lg w-full h-[500px] object-cover" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-gray-800 font-playfair italic">"Excellence is in the details."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
