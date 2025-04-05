
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ContentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  aspectRatio?: number;
}

const ContentCard = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt,
  aspectRatio = 4/3 
}: ContentCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
      <div className="relative">
        <AspectRatio ratio={aspectRatio}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </AspectRatio>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const ResponsiveContent = () => {
  const contentItems = [
    {
      title: "Modern Design",
      description: "Clean, contemporary aesthetics that prioritize user experience and visual appeal.",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      imageAlt: "Person using a MacBook Pro on a desk"
    },
    {
      title: "Responsive Layout",
      description: "Fluid layouts that adapt seamlessly to any screen size or device type.",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      imageAlt: "Monitor showing code"
    },
    {
      title: "Performance Optimized",
      description: "Fast loading speeds and optimized assets for the best possible user experience.",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      imageAlt: "Circuit board close-up"
    },
    {
      title: "Cross-Platform",
      description: "Works flawlessly across all modern browsers and operating systems.",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      imageAlt: "Macro photography of black circuit board"
    }
  ];

  return (
    <section className="py-12 md:py-20" id="about">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Our Features</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          We build responsive, accessible and high-performance web applications that look great on any device.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item, index) => (
            <ContentCard
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsiveContent;
