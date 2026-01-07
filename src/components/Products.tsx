import { Link } from 'react-router-dom';
import { Car, Factory, Droplets, Thermometer, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    icon: Car,
    title: 'Automotive Oils',
    description: 'Engine oils for all vehicles',
    link: '/products/automotive-oils',
  },
  {
    icon: Factory,
    title: 'Industrial Oils',
    description: 'Heavy-duty industrial lubricants',
    link: '/products/industrial-oils',
  },
  {
    icon: Droplets,
    title: 'Greases',
    description: 'Premium quality greases',
    link: '/products/greases',
  },
  {
    icon: Thermometer,
    title: 'Coolants',
    description: 'Cooling system fluids',
    link: '/products/coolants',
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            OUR <span className="text-primary">PRODUCTS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive range of lubricants and fluids for every industry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.title}
              to={product.link}
              className="group card-gradient rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl tracking-wide text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {product.description}
              </p>
              <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                View Products <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" className="gap-2">
              View All Products <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
