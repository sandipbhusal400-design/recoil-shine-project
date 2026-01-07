import { useState } from 'react';
import { Product } from '@/data/products';
import ProductDetailModal from './ProductDetailModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group bg-card border border-border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Product Image Container */}
        <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 p-6 flex items-center justify-center overflow-hidden">
          {/* Placeholder for product image */}
          <div className="w-full h-full flex items-center justify-center">
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.name}
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-32 h-40 bg-gradient-to-b from-primary/30 to-primary/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                <span className="text-primary/50 text-xs text-center px-2">Product Image</span>
              </div>
            )}
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
          
          {/* View details badge */}
          <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Details
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-display text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          
          {/* Available Sizes Preview */}
          <div className="mt-3 flex flex-wrap gap-1">
            {product.sizes.slice(0, 4).map((size) => (
              <span 
                key={size} 
                className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground"
              >
                {size} {product.sizeUnit === 'kg' ? 'kg' : 'L'}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-xs text-muted-foreground">+{product.sizes.length - 4} more</span>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
