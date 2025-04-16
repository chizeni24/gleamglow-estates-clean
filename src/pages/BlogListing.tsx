
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Search } from "lucide-react";
import { GoldButton } from "@/components/ui/gold-button";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

// Reusing the blog posts data from the Blog component
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
    title: "The Ultimate Spring Cleaning Checklist for Your Home",
    excerpt: "Follow this comprehensive guide to give your home a thorough spring cleaning that will leave it pristine and refreshed.",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Sophia Williams"
  },
  {
    id: "4",
    title: "Home Maintenance: Seasonal Guide",
    excerpt: "Keep your home in pristine condition year-round with our comprehensive seasonal maintenance guide.",
    date: "March 5, 2025",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "James Anderson"
  },
  {
    id: "5",
    title: "The Science Behind Professional Cleaning Techniques",
    excerpt: "Explore the science and methodology behind professional cleaning techniques that deliver superior results.",
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Emma Johnson"
  },
  {
    id: "6",
    title: "Designing Easy-to-Clean Home Spaces",
    excerpt: "Learn architectural and design principles that make your home easier to clean and maintain over time.",
    date: "February 20, 2025",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Michael Thompson"
  }
];

const POSTS_PER_PAGE = 6;

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link to={`/blog/${post.id}`} className="block h-full group">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform group-hover:translate-y-[-5px] group-hover:shadow-xl mb-6 h-full cursor-pointer">
        <div className="relative h-48">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">{post.date}</span>
            <span className="text-sm text-gold">By {post.author}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gold transition-colors">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="text-gold group-hover:text-gold-dark flex items-center gap-1 font-medium">
            Continue Reading <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const BlogListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  
  // Calculate current posts to display
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16 md:py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <Link 
                to="/#blog" 
                className="text-gold hover:text-gold-dark flex items-center gap-2 mb-4 font-medium"
              >
                <ArrowLeft size={18} />
                Back to Home
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Blog</h1>
              <p className="text-gray-600 mt-2">Insights, tips, and stories about home cleaning</p>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold w-full md:w-64"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset to first page on search
                }}
              />
            </div>
          </div>
          
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-10 flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                          className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'} hover:text-gold`}
                          aria-disabled={currentPage === 1}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <PaginationItem key={index}>
                          <PaginationLink
                            onClick={() => handlePageChange(index + 1)}
                            isActive={currentPage === index + 1}
                            className={`cursor-pointer ${currentPage === index + 1 ? 'bg-gold text-white border-gold hover:bg-gold-dark' : 'hover:text-gold'}`}
                          >
                            {index + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                          className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'} hover:text-gold`}
                          aria-disabled={currentPage === totalPages}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">No articles found</h2>
              <p className="text-gray-600 mb-8">Try adjusting your search terms</p>
              {searchTerm && (
                <GoldButton onClick={() => setSearchTerm("")}>Clear Search</GoldButton>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogListing;
