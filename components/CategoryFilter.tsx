import React, { useState } from 'react';
import { CATEGORIES } from '@/data/tools'; // Import using alias
import { Category } from '@/types/interfaces'; // Import using alias
import { Filter, X } from 'lucide-react'; // Import icons for mobile toggle

/**
 * Component for filtering categories/macro areas.
 */
interface CategoryFilterProps {
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategoryId, onSelectCategory }) => {
  // State for dropdown menu visibility on small screens
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (id: string) => {
    onSelectCategory(id);
    setIsOpen(false); // Close the menu after selection on mobile
  };

  return (
    // On large screens (lg): sticky sidebar and well-defined.
    // On mobile: full width.
    <aside className="lg:w-1/4 h-fit lg:sticky lg:top-4">
      
      {/* Main container with shadow and p-4 for mobile */}
      <div className="bg-white p-4 rounded-xl shadow-lg lg:p-6 lg:rounded-xl lg:shadow-lg">
        <div className="flex justify-between items-center">
          {/* The header remains visible on both mobile and desktop */}
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 lg:mb-4 lg:border-b lg:pb-2">
            Macro Areas
          </h2>
          
          {/* Toggle button visible only on mobile (below 'lg') */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center p-2 rounded-lg text-gray-700 bg-gray-100 lg:hidden hover:bg-gray-200 transition-colors"
            aria-expanded={isOpen}
            aria-controls="category-filter-nav"
          >
            {isOpen ? <X size={20} className="mr-1" /> : <Filter size={20} className="mr-1" />}
            <span className="font-medium text-sm">{isOpen ? 'Close' : 'Filter'}</span>
          </button>
        </div>
        
        {/* Navigation menu: always visible on desktop (lg), collapsible on mobile */}
        <nav 
          id="category-filter-nav"
          className={`mt-4 overflow-hidden transition-all duration-300 ${
            isOpen 
              ? 'max-h-80 opacity-100 pointer-events-auto' 
              : 'max-h-0 lg:max-h-full opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto'
          }`}
        >
          <ul className="space-y-2 max-h-80 overflow-y-auto">
            {CATEGORIES.map((category: Category) => {
              const isSelected = category.id === selectedCategoryId;
              const baseClass = 'flex items-center p-3 rounded-lg transition-all duration-200 cursor-pointer';
              
              let activeClass = '';
              if (isSelected) {
                // Apply background and colored text when selected
                activeClass = `${category.colorClass.replace('text-', 'bg-').replace('600', '100')} ${category.colorClass.replace('border-', 'text-')}`;
              } else {
                activeClass = 'text-gray-700 hover:bg-gray-100';
              }

              return (
                <li key={category.id}>
                  <button
                    onClick={() => handleSelect(category.id)}
                    className={`${baseClass} ${activeClass} w-full text-left`}
                  >
                    <category.icon size={20} className="mr-3" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};