
import React from "react";

const steps = [
  { step: '1', title: 'Declutter & Dust', text: 'We clear surfaces and high-dust vents, fans & corners.' },
  { step: '2', title: 'Deep Clean & Steam', text: 'Hospital-grade steam on all high-touch points.' },
  { step: '3', title: 'Final Polish & Walkthrough', text: 'Hotel-style bed fold, scent mist, client sign-off.' },
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="py-20">
      <h2 className="text-center text-3xl font-serif mb-12">
        The <span className="text-gold">Glow Standard</span>
      </h2>
      <div className="relative max-w-4xl mx-auto border-l-2 border-gold-light px-6">
        {steps.map(s => (
          <div key={s.step} className="pl-10 mb-10">
            <div className="w-4 h-4 bg-gold rounded-full -left-2 top-1.5 absolute" />
            <h3 className="font-semibold">{s.step}. {s.title}</h3>
            <p className="text-sm text-gray-600">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessTimeline;
