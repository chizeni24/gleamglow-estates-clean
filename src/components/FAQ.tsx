
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes GleamGlow different from other cleaning services?",
      answer: "GleamGlow combines luxury-focused cleaning techniques with eco-friendly products that are safe for your family and pets. Our staff undergoes extensive training in handling premium materials and surfaces, ensuring that every corner of your home receives the care it deserves. We're not just cleaning; we're enhancing your living experience."
    },
    {
      question: "What products do you use in your cleaning process?",
      answer: "We use only high-grade, eco-friendly cleaning solutions that are effective yet gentle on all surfaces. Our product selection includes specialized formulas for different materials like marble, hardwood, natural stone, and delicate fabrics. All products are non-toxic and carefully chosen to maintain both the appearance and longevity of your valuable surfaces."
    },
    {
      question: "How do you ensure consistency in your cleaning quality?",
      answer: "We maintain rigorous quality standards through our comprehensive training program, detailed cleaning checklists, and regular quality inspections. Every cleaning team is supervised by an experienced team leader who ensures our exacting standards are met. Additionally, we welcome your feedback after each service to continuously refine our approach to your specific needs."
    },
    {
      question: "Can I customize my cleaning package?",
      answer: "Absolutely! We understand that every home has unique requirements. During your initial consultation, we'll discuss your specific needs and preferences to create a tailored cleaning plan. Whether you need extra attention for certain areas, have special instructions for antiques or artwork, or prefer specific products, we adapt our services to suit your individual space."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We understand that plans change. You can reschedule or cancel your appointment up to 24 hours before your scheduled service without any charge. For cancellations with less notice, a fee may apply. Please contact our customer service team as soon as possible if you need to make any changes to your appointment."
    },
    {
      question: "Do I need to be home during the cleaning service?",
      answer: "This is entirely up to your preference. Many clients provide us with entry instructions and are not present during cleaning, while others prefer to be home. Our team is fully bonded and insured for your peace of mind. We're happy to accommodate whatever arrangement makes you most comfortable."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 title-underline">Frequently Asked Questions</h2>
          <p className="text-gray-700">
            Find answers to common questions about our premium cleaning services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              Have more questions? We're here to help you get the answers you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking" className="btn-gold">
                Book a Consultation
              </Link>
              <a href="#contact" className="border-2 border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300 px-8 py-3 rounded-md font-medium">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
