
import React from "react";
import { Sparkles } from "./effects/Sparkles";

const About = () => {
  return <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 title-underline">
                About <span className="relative inline-block">
                  <span className="text-gold-lighter">Gleam</span>
                  <Sparkles className="opacity-30" count={3} />
                </span>
                <span className="relative inline-block ml-0.5">
                  <span className="text-gold-lighter">Glow</span>
                  <Sparkles className="opacity-30" count={3} />
                </span>
              </h2>
            </div>
            <div className="text-gray-700 space-y-6">
              <p className="text-lg">At GleamGlow, we turn clean into an experience—crisp surfaces, subtle eucalyptus steam, and details that simply feel better. Our eco-smart approach elevates any space from everyday to effortlessly polished, protecting what you value most without a single hidden extra.</p>
              <p className="At **GleamGlow**, we turn clean into an experience\u2014crisp surfaces, subtle eucalyptus steam, and details that simply feel better. Our eco-smart approach elevates any space from everyday to effortlessly polished, protecting what you value most without a single hidden extra.\n\nadd that and ensure to have that gleamglow color format as well\n">
                At <span className="text-gold-lighter font-medium relative inline-block">
                  Gleam<Sparkles className="opacity-30" count={3} minSize={1} maxSize={2} />
                </span>, we redefine luxury with every sweep, polish, and shine. Your space becomes a sanctuary — radiant, refined, and undeniably yours. Our expert team transforms the everyday into the extraordinary, using only the finest eco-conscious products to protect what you value most.
              </p>
              <p className="font-medium">
                Because your home deserves more than clean.
                <br />
                It deserves <span className="text-gold-lighter font-playfair relative inline-block">
                  GleamGlow
                  <span className="absolute -right-4 -top-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="animate-spin-slow">
                      <path d="M12 2L15 6H9L12 2Z" fill="#EBD27D"/>
                      <path d="M19 7L22 11H16L19 7Z" fill="#EBD27D"/>
                      <path d="M5 7L8 11H2L5 7Z" fill="#EBD27D"/>
                      <path d="M12 22L9 18H15L12 22Z" fill="#EBD27D"/>
                      <path d="M19 17L16 13H22L19 17Z" fill="#EBD27D"/>
                      <path d="M5 17L2 13H8L5 17Z" fill="#EBD27D"/>
                    </svg>
                  </span>
                </span>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <h3 className="text-gold-lighter font-bold text-xl mb-2">10+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <h3 className="text-gold-lighter font-bold text-xl mb-2">500+</h3>
                <p className="text-gray-600">Happy Homes Served</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Premium home interior" className="rounded-lg shadow-lg w-full h-[500px] object-cover hover:shadow-xl transition-all duration-300" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block hover:bg-gold/5 hover:-translate-y-1 transition-all">
                <p className="text-gray-800 font-playfair italic">"Excellence is in the details."</p>
              </div>
              <div className="absolute top-4 right-4 animate-float hidden md:block">
                <Sparkles color="#EBD27D" count={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
