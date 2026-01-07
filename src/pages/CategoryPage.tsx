import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ProductCard from '@/components/ProductCard';
import { getCategoryById } from '@/data/products';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId || '');

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Category Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{category.name}</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <Link to="/products">
              <Button variant="outline" size="icon" className="rounded-full">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              {category.name}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {category.description}
          </p>
        </div>
      </section>

      {/* Products Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* If category has sub-categories */}
          {category.subCategories && category.subCategories.map((subCategory) => (
            <div key={subCategory.id} className="mb-16 last:mb-0">
              {/* Sub-category Header */}
              <div className="mb-8">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  {subCategory.name}
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {subCategory.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}

          {/* If category has direct products (no sub-categories) */}
          {category.products && !category.subCategories && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default CategoryPage;
