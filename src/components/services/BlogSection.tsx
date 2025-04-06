
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  featured: boolean;
  image: string;
}

interface BlogSectionProps {
  blogPosts: BlogPost[];
}

const BlogSection = ({ blogPosts }: BlogSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = ['All', 'Maintenance', 'Products', 'Tips', 'Guides'];
  
  const filteredPosts = blogPosts.filter(post => 
    (activeCategory === 'All' || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="mt-28" id="blog-section">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold">Cleaning Tips & Insights</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text"
            placeholder="Search articles..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex overflow-x-auto space-x-4 mb-8 pb-2">
        {categories.map(category => (
          <button
            key={category}
            className={cn(
              "px-4 py-2 rounded-full whitespace-nowrap transition-colors duration-300",
              activeCategory === category 
                ? "bg-gold text-white" 
                : "bg-gray-100 hover:bg-gray-200"
            )}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPosts.map((post, index) => (
          <div 
            key={index}
            className={cn(
              "rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2",
              post.featured ? "col-span-2 row-span-2 md:col-span-2" : ""
            )}
          >
            <div className="relative h-48">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 px-3 py-1 bg-gold text-white text-xs font-semibold rounded">
                {post.category}
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-xl mb-2">{post.title}</h4>
              <p className="text-gray-600">{post.excerpt}</p>
              <Link to={`/blog/article-${index+1}`} className="mt-4 inline-block text-gold font-medium hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
