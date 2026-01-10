import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            CONTACT <span className="text-primary">US</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch for quotations and inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card-gradient rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">DEVDAHA-03, RUPANDEHI</p>
                  <p className="text-primary font-medium">NEPAL</p>
                </div>
              </div>
            </div>

            <div className="card-gradient rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-foreground mb-2">Phone</h3>
                  <a href="tel:+9779767612453" className="text-muted-foreground hover:text-primary transition-colors">
                    +977-9767612453
                  </a>
                </div>
              </div>
            </div>

            <div className="card-gradient rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-foreground mb-2">Email</h3>
                  <a href="mailto:info@globallubricants.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@globallubricants.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Link */}
            <a
              href="https://www.facebook.com/profile.php?id=61565604573304"
              target="_blank"
              rel="noopener noreferrer"
              className="block card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#1877F2]/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-foreground">Facebook</h3>
                  <p className="text-muted-foreground text-sm">Follow us on Facebook</p>
                </div>
              </div>
            </a>
          </div>

          {/* CTA Card */}
          <div className="card-gradient rounded-xl p-8 border border-primary/30 glow-shadow h-fit">
            <h3 className="font-display text-2xl tracking-wide text-foreground mb-4">
              Request a Quote
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Contact us for quotations on any of our products and services. We're here to help you find the perfect lubricant solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/9779857076023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 h-12">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
              <a href="tel:+9779767612453" className="flex-1">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 h-12">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
