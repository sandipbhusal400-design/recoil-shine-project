import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Product, ProductSize, formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Select first size with image, or first size
      const initialSize = product.sizes.find(s => s.image) || product.sizes[0];
      setSelectedSize(initialSize);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, product.sizes]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleSizeSelect = (sizeObj: ProductSize) => {
    setSelectedSize(sizeObj);
  };

  // Get current display image - use selected size image or fallback to any available image
  const currentImage = selectedSize?.image || product.sizes.find(s => s.image)?.image;

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className={`relative bg-card border border-border rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Product Image Section */}
          <div className="relative bg-gradient-to-br from-muted to-muted/50 p-4 sm:p-8 md:p-12 flex items-center justify-center min-h-[200px] sm:min-h-[300px] md:min-h-[500px]">
            <div className="relative w-full h-full flex items-center justify-center">
              {currentImage ? (
                <img 
                  src={currentImage} 
                  alt={product.name}
                  className="max-w-full max-h-48 sm:max-h-80 md:max-h-96 object-contain animate-fade-in"
                  key={selectedSize?.size}
                  loading="lazy"
                />
              ) : (
                <div className="w-32 h-44 sm:w-48 sm:h-64 bg-gradient-to-b from-primary/30 to-primary/10 rounded-xl flex items-center justify-center border-2 border-dashed border-primary/30">
                  <span className="text-primary/50 text-sm text-center px-4">Product Image</span>
                </div>
              )}
            </div>
            
            {/* Price Badge - Bottom Left of Image */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-primary text-primary-foreground font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-lg text-base sm:text-lg">
              {formatPrice(selectedSize?.price || 0)}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="p-4 sm:p-6 md:p-8 flex flex-col">
            {/* Product Name */}
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-3 sm:mb-4">
              {product.name}
            </h2>

            {/* Description */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-1 sm:mb-2">
                Specification
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed line-clamp-3 sm:line-clamp-none">
                {product.description}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-4" />

            {/* Size Selection */}
            <div className="flex-1">
              <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2 sm:mb-4">
                Select Size
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {product.sizes.map((sizeObj) => (
                  <Button
                    key={sizeObj.size}
                    variant={selectedSize?.size === sizeObj.size ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleSizeSelect(sizeObj)}
                    className={`min-w-[70px] sm:min-w-[100px] transition-all duration-200 flex flex-col items-center py-2 sm:py-3 h-auto text-xs sm:text-sm ${
                      selectedSize?.size === sizeObj.size 
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
                        : 'hover:border-primary hover:text-primary'
                    }`}
                  >
                    <span className="font-semibold">
                      {sizeObj.size} {product.sizeUnit === 'kg' ? 'Kg' : 'L'}
                    </span>
                    <span className="text-[10px] sm:text-xs opacity-80 mt-0.5 sm:mt-1">
                      {sizeObj.price > 0 ? `Nrs. ${sizeObj.price}` : 'Ask'}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Selected Size Display */}
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-muted-foreground text-sm">Selected:</span>
                  <span className="font-display text-xl text-foreground ml-2">
                    {selectedSize?.size} {product.sizeUnit === 'kg' ? 'Kg' : 'Liter'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-muted-foreground text-sm">Price:</span>
                  <span className="font-display text-xl text-primary ml-2">
                    {formatPrice(selectedSize?.price || 0)}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-6">
              <a
                href="https://wa.me/9779857076023"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                  Inquire on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
