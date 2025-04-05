
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 5 Eco-Friendly Cleaning Products for Your Home",
    excerpt: "Discover effective and environmentally friendly cleaning products that are safe for your family and the planet.",
    date: "April 2, 2025",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Emma Johnson"
  },
  {
    id: "2",
    title: "How Regular Professional Cleaning Improves Indoor Air Quality",
    excerpt: "Learn how professional cleaning services can significantly improve the air quality in your home and benefit your health.",
    date: "March 25, 2025",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Michael Thompson"
  },
  {
    id: "3",
    title: "The Ultimate Spring Cleaning Checklist for Luxury Homes",
    excerpt: "Follow this comprehensive guide to give your luxury home a thorough spring cleaning that will leave it pristine and refreshed.",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Sophia Williams"
  }
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
      <div className="relative h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">{post.date}</span>
          <span className="text-sm text-gold">By {post.author}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.id}`} 
          className="text-gold hover:text-gold-dark flex items-center gap-1 font-medium"
        >
          Read More <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <section className="py-16 bg-gray-100" id="blog">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Our Latest Articles</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Dive into our collection of articles where we share expert cleaning tips, industry insights, and home maintenance advice.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="bg-white text-gold hover:bg-gold hover:text-white border border-gold transition-colors duration-300 px-8 py-3 rounded-md font-medium inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
