import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

// Blog posts data - we're keeping this simple for now
const blogPosts = [
  {
    id: "1",
    title: "Top 5 Eco-Friendly Cleaning Products for Your Home",
    content: `
      <p class="mb-4">Keeping your home clean shouldn't come at the expense of the environment. In today's market, there are numerous eco-friendly cleaning products that are just as effective as traditional ones but much better for our planet.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. All-Purpose Vinegar Solution</h2>
      <p class="mb-4">White vinegar mixed with water creates an effective all-purpose cleaner. The acidity in vinegar helps dissolve grease and grime while also killing bacteria. Add a few drops of essential oil for a pleasant scent.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Baking Soda Scrub</h2>
      <p class="mb-4">Baking soda is a mild abrasive that can tackle tough stains on countertops, sinks, and tubs. It's also great for deodorizing carpets and upholstery.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Castile Soap</h2>
      <p class="mb-4">Made from plant oils, Castile soap is biodegradable and versatile. It can be used for everything from washing dishes to mopping floors.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Lemon Juice</h2>
      <p class="mb-4">The acidity in lemon juice makes it effective against hard water stains and grease. It also leaves a fresh, clean scent.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Essential Oils</h2>
      <p class="mb-4">Many essential oils have antimicrobial properties. Tea tree oil, for instance, can be added to cleaning solutions for extra disinfecting power.</p>
      
      <p class="mt-8">By switching to these eco-friendly alternatives, you're not only creating a healthier living environment but also contributing to a healthier planet.</p>
    `,
    date: "April 2, 2025",
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Emma Johnson"
  },
  {
    id: "2",
    title: "How Regular Professional Cleaning Improves Indoor Air Quality",
    content: `
      <p class="mb-4">The air quality inside your home can have a significant impact on your health and comfort. Regular professional cleaning services play a crucial role in maintaining good indoor air quality. Here's how:</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Removal of Dust and Allergens</h2>
      <p class="mb-4">Professional cleaners use specialized equipment and techniques to thoroughly remove dust, pet dander, and other allergens from hard-to-reach places. This is particularly important for people with allergies or respiratory conditions.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Elimination of Mold and Mildew</h2>
      <p class="mb-4">Mold and mildew not only damage your home but also release spores into the air that can cause health problems. Professional cleaners are trained to identify and address areas prone to mold growth.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Deep Carpet Cleaning</h2>
      <p class="mb-4">Carpets act as filters, trapping dust and pollutants. Over time, these particles can build up and affect air quality. Professional carpet cleaning removes these contaminants, improving the air you breathe.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Proper Ventilation</h2>
      <p class="mb-4">Professional cleaners ensure that vents and ducts are free of dust and debris, allowing for proper air circulation throughout your home.</p>
      
      <p class="mt-8">By investing in regular professional cleaning services, you're not just maintaining the appearance of your home but also creating a healthier living environment for you and your family.</p>
    `,
    date: "March 25, 2025",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Michael Thompson"
  },
  {
    id: "3",
    title: "The Ultimate Spring Cleaning Checklist for Your Home",
    content: `
      <p class="mb-4">Spring cleaning is a tradition that allows us to refresh our homes after the winter months. Here's a comprehensive checklist to ensure every corner of your home gets the attention it needs:</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Kitchen</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Clean inside of refrigerator and freezer</li>
        <li>Wipe down all appliances, inside and out</li>
        <li>Degrease range hood and filter</li>
        <li>Clean oven</li>
        <li>Descale coffee maker and kettle</li>
        <li>Organize pantry and check expiration dates</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Bathroom</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Scrub shower, tub, sink, and toilet</li>
        <li>Clean grout and caulking</li>
        <li>Wash shower curtain and bath mats</li>
        <li>Dispose of expired medications and products</li>
        <li>Disinfect frequently touched surfaces</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Living Areas</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Vacuum and shampoo carpets</li>
        <li>Clean upholstery and curtains</li>
        <li>Dust all surfaces, including ceiling fans and light fixtures</li>
        <li>Clean windows and mirrors</li>
        <li>Wash baseboards and crown molding</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Bedrooms</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Wash all bedding, including pillows and duvet</li>
        <li>Rotate and flip mattress</li>
        <li>Declutter and organize closets</li>
        <li>Clean under bed and other furniture</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">General Tasks</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Replace batteries in smoke and carbon monoxide detectors</li>
        <li>Clean and maintain HVAC filters</li>
        <li>Organize and declutter storage areas</li>
        <li>Clean and maintain outdoor areas</li>
      </ul>
      
      <p class="mt-8">Remember, spring cleaning doesn't have to be done in one day. Break it down into manageable tasks and enjoy the fresh, clean result!</p>
    `,
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Sophia Williams"
  },
  {
    id: "4",
    title: "Home Maintenance: Seasonal Guide",
    content: `
      <p class="mb-4">Maintaining your home throughout the year ensures it remains in top condition and helps prevent costly repairs. Here's a seasonal guide to help you stay on track:</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Spring</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Inspect roof for winter damage</li>
        <li>Clean gutters and downspouts</li>
        <li>Check exterior for paint damage</li>
        <li>Service air conditioning system</li>
        <li>Inspect and repair window and door screens</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Summer</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Check irrigation system</li>
        <li>Inspect deck or patio for repairs</li>
        <li>Clean outdoor furniture</li>
        <li>Check for pest infestations</li>
        <li>Prune trees and shrubs away from house</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Fall</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Clean gutters again after leaves fall</li>
        <li>Service heating system</li>
        <li>Seal gaps and cracks to prevent drafts</li>
        <li>Drain and store garden hoses</li>
        <li>Clean chimney if you have a fireplace</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Winter</h2>
      <ul class="list-disc pl-6 mb-4">
        <li>Check for ice dams on roof</li>
        <li>Test smoke and carbon monoxide detectors</li>
        <li>Inspect attic insulation</li>
        <li>Check for plumbing leaks</li>
        <li>Keep walkways clear of ice and snow</li>
      </ul>
      
      <p class="mt-8">By following this seasonal maintenance schedule, you'll keep your home in excellent condition year-round and avoid unexpected problems.</p>
    `,
    date: "March 5, 2025",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "James Anderson"
  },
  {
    id: "5",
    title: "The Science Behind Professional Cleaning Techniques",
    content: `
      <p class="mb-4">Professional cleaning isn't just about scrubbing harder or using stronger chemicals. It's a science that combines the right techniques, tools, and products to achieve optimal results. Here's a look at the science behind professional cleaning:</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Understanding Surface Chemistry</h2>
      <p class="mb-4">Professional cleaners know that different surfaces require different approaches. For instance, acidic cleaners work well on mineral deposits but can damage natural stone. Alkaline cleaners are effective against organic matter but may not be suitable for certain metals.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Role of Surfactants</h2>
      <p class="mb-4">Surfactants are compounds that lower the surface tension between liquids or between a liquid and a solid. They help water penetrate and lift dirt from surfaces. Professional cleaning products contain carefully formulated surfactants for specific cleaning challenges.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Temperature and Cleaning Efficiency</h2>
      <p class="mb-4">Temperature significantly affects cleaning efficiency. Hot water increases the kinetic energy of molecules, making it easier to break down grease and oils. However, excessive heat can damage certain materials or set protein-based stains.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Contact Time</h2>
      <p class="mb-4">Many cleaning products need adequate contact time to work effectively. This allows the chemical reactions necessary for breaking down dirt and grime to occur. Rushing this process often leads to suboptimal results.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Mechanical Action</h2>
      <p class="mb-4">The physical force applied during cleaning—whether through scrubbing, pressure washing, or agitation—plays a crucial role in dislodging dirt. Professional cleaners understand the appropriate level of mechanical action for each surface and soil type.</p>
      
      <p class="mt-8">Understanding these scientific principles allows professional cleaners to approach each cleaning challenge methodically, resulting in superior outcomes compared to impromptu cleaning efforts.</p>
    `,
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Emma Johnson"
  },
  {
    id: "6",
    title: "Designing Easy-to-Clean Home Spaces",
    content: `
      <p class="mb-4">The design of your home significantly impacts how easy or difficult it is to clean. By making thoughtful design choices, you can create spaces that are naturally easier to maintain. Here are some principles to consider:</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Minimize Dust-Collecting Surfaces</h2>
      <p class="mb-4">Flat, smooth surfaces collect less dust than textured ones. Consider sleek, minimalist furniture, and avoid unnecessary decorative moldings or intricate designs that can trap dust.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Choose Easy-to-Clean Materials</h2>
      <p class="mb-4">Opt for materials that don't easily stain or require special maintenance. For example, quartz countertops are more stain-resistant than marble, and glazed ceramic tiles are easier to clean than natural stone tiles.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Eliminate Hard-to-Reach Areas</h2>
      <p class="mb-4">Design spaces with accessibility in mind. Avoid deep corners in kitchens where crumbs and dirt can accumulate. Consider wall-mounted toilets and vanities in bathrooms to make floor cleaning easier.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Optimize Storage Solutions</h2>
      <p class="mb-4">Adequate storage helps reduce clutter, making cleaning more efficient. Build storage solutions that suit your specific needs, such as hidden cabinets, drawer organizers, and closet systems.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Select Appropriate Flooring</h2>
      <p class="mb-4">Some flooring options are significantly easier to maintain than others. Luxury vinyl tile, laminate, and porcelain tile are generally easier to clean than carpeting or hardwood.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Plan for Good Ventilation</h2>
      <p class="mb-4">Proper ventilation reduces moisture, which can lead to mold and mildew. Ensure bathrooms and kitchens have adequate ventilation systems to minimize cleaning challenges.</p>
      
      <p class="mt-8">By incorporating these design principles, you'll create a home that not only looks beautiful but also requires less time and effort to keep clean.</p>
    `,
    date: "February 20, 2025",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    author: "Michael Thompson"
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/#blog" 
              className="text-gold hover:text-gold-dark flex items-center gap-2 justify-center font-medium"
            >
              <ArrowLeft size={18} />
              Return to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16 pb-24">
        <div className="container-custom">
          <Link 
            to="/#blog" 
            className="text-gold hover:text-gold-dark flex items-center gap-2 mb-8 font-medium"
          >
            <ArrowLeft size={18} />
            Back to All Articles
          </Link>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64 md:h-96">
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-sm text-gold">By {post.author}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>
              
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 3)
                .map(relatedPost => (
                  <Link 
                    to={`/blog/${relatedPost.id}`} 
                    key={relatedPost.id}
                    className="block"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
                      <div className="relative h-40">
                        <img 
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">{relatedPost.title}</h3>
                        <span className="text-sm text-gold">{relatedPost.author}</span>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
