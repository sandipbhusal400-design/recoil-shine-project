import { useState } from 'react';
import { Product, formatPrice } from '@/data/products';
import ProductDetailModal from './ProductDetailModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Get the first size with an image, or the first size
  const defaultSize = product.sizes.find(s => s.image) || product.sizes[0];
  const displayImage = defaultSize?.image;
  const displayPrice = defaultSize?.price || 0;

  return (
    <>
      <div 
        className="group bg-card border border-border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 active:scale-[0.98]"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Product Image Container */}
        <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 p-3 sm:p-4 flex items-center justify-center overflow-hidden">
          {/* Product Image */}
          <div className="w-full h-full flex items-center justify-center">
            {displayImage ? (
              <img 
                src={displayImage} 
                alt={product.name}
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="w-24 h-32 sm:w-32 sm:h-40 bg-gradient-to-b from-primary/30 to-primary/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                <span className="text-primary/50 text-xs text-center px-2">Product Image</span>
              </div>
            )}
          </div>
          
          {/* Price Badge - Bottom Left */}
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg shadow-lg">
            {formatPrice(displayPrice)}
          </div>
          
          {/* View details badge - Hidden on mobile for cleaner look */}
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-background/90 text-foreground text-xs px-2 py-0.5 sm:px-3 sm:py-1 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 border border-border">
            View
          </div>
        </div>

        {/* Product Info */}
        <div className="p-3 sm:p-4">
          <h3 className="font-display text-sm sm:text-lg text-foreground mb-1 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 hidden sm:block">
            {product.description}
          </p>
          
          {/* Available Sizes Preview */}
          <div className="mt-2 sm:mt-3 flex flex-wrap gap-1">
            {product.sizes.slice(0, 3).map((sizeObj) => (
              <span 
                key={sizeObj.size} 
                className="text-[10px] sm:text-xs bg-muted px-1.5 py-0.5 sm:px-2 rounded text-muted-foreground"
              >
                {sizeObj.size}{product.sizeUnit === 'kg' ? 'kg' : 'L'}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="text-[10px] sm:text-xs text-muted-foreground">+{product.sizes.length - 3}</span>
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
