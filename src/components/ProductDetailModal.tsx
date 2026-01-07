import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      setSelectedSize(product.sizes[0]);
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
          <div className="bg-gradient-to-br from-muted to-muted/50 p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[500px]">
            <div className="relative w-full h-full flex items-center justify-center">
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-w-full max-h-80 md:max-h-96 object-contain animate-fade-in"
                />
              ) : (
                <div className="w-48 h-64 bg-gradient-to-b from-primary/30 to-primary/10 rounded-xl flex items-center justify-center border-2 border-dashed border-primary/30">
                  <span className="text-primary/50 text-sm text-center px-4">Product Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="p-6 md:p-8 flex flex-col">
            {/* Product Name */}
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              {product.name}
            </h2>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Specification
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-4" />

            {/* Size Selection */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                Available Sizes
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[80px] transition-all duration-200 ${
                      selectedSize === size 
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30' 
                        : 'hover:border-primary hover:text-primary'
                    }`}
                  >
                    {size} {product.sizeUnit === 'kg' ? 'Kg' : 'Liter'}
                  </Button>
                ))}
              </div>
            </div>

            {/* Selected Size Display */}
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Selected Size:</span>
                <span className="font-display text-xl text-primary">
                  {selectedSize} {product.sizeUnit === 'kg' ? 'Kg' : 'Liter'}
                </span>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-6">
              <a
                href="https://wa.me/9779709109923"
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
