import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import CategoryCard from '@/components/CategoryCard';
import { allCategories } from '@/data/products';
import { ChevronRight, Home } from 'lucide-react';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Products</span>
          </nav>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our comprehensive range of high-quality lubricants and greases designed for automotive, industrial, and specialized applications.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Info */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-muted-foreground mb-8">
              All RACOIL products are manufactured using premium base oils and advanced additive technology, ensuring superior performance and protection for your engines and machinery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card border border-border rounded-lg p-4 min-w-[150px]">
                <div className="font-display text-2xl text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 min-w-[150px]">
                <div className="font-display text-2xl text-primary">4</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 min-w-[150px]">
                <div className="font-display text-2xl text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ProductsPage;
