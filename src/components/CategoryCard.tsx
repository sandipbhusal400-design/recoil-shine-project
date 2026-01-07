import { Link } from 'react-router-dom';
import { Car, Factory, Droplets, Thermometer, ChevronRight } from 'lucide-react';
import { Category } from '@/data/products';

interface CategoryCardProps {
  category: Category;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Factory,
  Droplets,
  Thermometer,
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Icon = iconMap[category.icon] || Droplets;

  return (
    <Link 
      to={`/products/${category.id}`}
      className="group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6 md:p-8">
        {/* Icon */}
        <div className="w-16 h-16 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>

        {/* Category Name */}
        <h3 className="font-display text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4">
          {category.description}
        </p>

        {/* Products count */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {category.subCategories 
              ? `${category.subCategories.length} Sub-categories` 
              : `${category.products?.length || 0} Products`
            }
          </span>
          
          {/* Arrow */}
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
