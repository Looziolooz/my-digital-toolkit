import React, { useState } from 'react';
import { CATEGORIES } from '@/data/tools'; // Import using alias
import { Category } from '@/types/interfaces'; // Import using alias
import { Filter, X, DollarSign } from 'lucide-react'; // Import icons for mobile toggle and cost filter

/**
 * Component for filtering categories/macro areas.
 */
interface CategoryFilterProps {
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;
  // New props for cost filter
  selectedCost: string;
  onSelectCost: (cost: string) => void;
  costOptions: string[];
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategoryId, 
  onSelectCategory,
  selectedCost,
  onSelectCost,
  costOptions
}) => {
  // State for dropdown menu visibility on small screens
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectCategory = (id: string) => {
    onSelectCategory(id);
    setIsOpen(false); // Close the menu after selection on mobile
  };

  const handleSelectCost = (cost: string) => {
    onSelectCost(cost);
    setIsOpen(false); // Close the menu after selection on mobile
  };

  // Funzione helper per le classi dei pulsanti
  const getButtonClasses = (isSelected: boolean, colorClass?: string): string => {
    const baseClass = 'flex items-center p-3 rounded-lg transition-all duration-200 cursor-pointer w-full text-left';
    if (isSelected && colorClass) {
      return `${baseClass} ${colorClass.replace('text-', 'bg-').replace('600', '100')} ${colorClass.replace('border-', 'text-')}`;
    }
    if (isSelected) {
        return `${baseClass} bg-indigo-100 text-indigo-700 font-semibold`;
    }
    return `${baseClass} text-gray-700 hover:bg-gray-100`;
  };

  return (
    // On large screens (lg): sticky sidebar and well-defined.
    // On mobile: full width.
    <aside className="lg:w-1/4 h-fit lg:sticky lg:top-4">
      
      {/* Main container with shadow and p-4 for mobile */}
      <div className="bg-white p-4 rounded-xl shadow-lg lg:p-6 lg:rounded-xl lg:shadow-lg">
        <div className="flex justify-between items-center lg:block">
          {/* The header remains visible on both mobile and desktop */}
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 lg:mb-4 lg:border-b lg:pb-2">
            Macro Areas & Filters
          </h2>
          
          {/* Toggle button visible only on mobile (sotto 'lg') */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center p-2 rounded-lg text-gray-700 bg-gray-100 lg:hidden hover:bg-gray-200 transition-colors"
            aria-expanded={isOpen}
            aria-controls="category-filter-nav"
          >
            {isOpen ? <X size={20} className="mr-1" /> : <Filter size={20} className="mr-1" />}
            <span className="font-medium text-sm">{isOpen ? 'Close Filters' : 'Filter Options'}</span>
          </button>
        </div>
        
        {/* Navigation menu: always visible on desktop (lg), collapsible on mobile */}
        <nav 
          id="category-filter-nav"
          className={`mt-4 overflow-hidden transition-all duration-300 ${
            isOpen 
              ? 'max-h-[800px] opacity-100 pointer-events-auto' 
              : 'max-h-0 lg:max-h-full opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto'
          }`}
        >
          {/* --------------------- COST FILTER SECTION --------------------- */}
          <div className="mb-6 pb-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center mb-2">
                <DollarSign size={18} className="mr-2 text-indigo-500" />
                Cost Filter
            </h3>
            <div className="flex flex-wrap gap-2">
              {costOptions.map((cost) => (
                <button
                  key={cost}
                  onClick={() => handleSelectCost(cost)}
                  className={`text-xs px-3 py-1 rounded-full font-semibold transition-colors duration-200 
                    ${cost === selectedCost 
                      ? 'bg-indigo-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                    }`}
                >
                  {cost.charAt(0).toUpperCase() + cost.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* --------------------- CATEGORY FILTER SECTION --------------------- */}
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
             Categories
          </h3>
          <ul className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
            {CATEGORIES.map((category: Category) => {
              const isSelected = category.id === selectedCategoryId;
              const activeClass = getButtonClasses(isSelected, category.colorClass);

              return (
                <li key={category.id}>
                  <button
                    onClick={() => handleSelectCategory(category.id)}
                    className={activeClass}
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