import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSlide1 from '@/assets/hero-slide-1.jpg';
import heroSlide2 from '@/assets/hero-slide-2.jpg';
import heroSlide3 from '@/assets/hero-slide-3.jpg';
import heroSlide4 from '@/assets/hero-slide-4.jpg';

const slides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide})`,
            opacity: currentSlide === index ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider mb-2 animate-fade-up">
            <span className="text-foreground">RAC</span>
            <span className="text-primary">OIL</span>
          </h1>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-wide text-foreground/90 mb-2 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            LUBRICANTS & GREASE
          </h2>
          
          <p className="font-display text-lg sm:text-xl text-primary tracking-widest mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            NEPAL
          </p>
          
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Trusted manufacturer of high-quality lubricants serving automotive, industrial, agricultural, and construction sectors.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a href="#products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Our Products
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-primary w-6' : 'bg-foreground/30'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#products" className="text-foreground/50 hover:text-primary transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;