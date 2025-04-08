
import React from "react";

const OurStory = () => {
  const milestones = [
    {
      year: "2010",
      title: "A Vision Born",
      description: "Founded with a simple belief: exceptional spaces deserve cleaning that honors their design and craftsmanship."
    },
    {
      year: "2015",
      title: "The GleamGlow Method",
      description: "Developed our signature five-step cleaning approach that became the gold standard in premium home care."
    },
    {
      year: "2018",
      title: "Eco-Premium Innovation",
      description: "Pioneered the use of high-quality eco-friendly cleaning solutions formulated specifically for premium materials."
    },
    {
      year: "Today",
      title: "Custodians of Excellence",
      description: "Trusted by homeowners who understand that true quality includes how a space is maintained and cared for."
    }
  ];

  return (
    <section id="story" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700">
            The journey that transformed the art of exceptional home cleaning.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-gold-light via-gold to-gold-dark"></div>
          
          {/* Timeline events */}
          <div className="relative z-10">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex items-center mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <span className="text-gold font-bold text-xl mb-2 inline-block">{milestone.year}</span>
                    <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-gold bg-white shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="font-playfair italic text-lg text-gray-700 max-w-2xl mx-auto">
            "We believe that the spaces we inhabit shape our experiences. At GleamGlow, we don't just clean—we preserve the beauty and intention behind every design choice."
          </p>
          <p className="mt-4 text-gold font-medium">— Kalizen Mcpah, Founder</p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
