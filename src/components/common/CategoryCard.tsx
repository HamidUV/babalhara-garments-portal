
import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  description, 
  icon,
  className
}) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-lg shadow-sm border border-gray-100 card-hover animate-fade-in",
      className
    )}>
      <div className="text-gold mb-4">{icon}</div>
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CategoryCard;
