import React from 'react';
import { CATEGORIES } from '@/data/tools'; // Import using alias
import { Category } from '@/types/interfaces'; // Import using alias

/**
 * Component for filtering categories/macro areas.
 */
interface CategoryFilterProps {
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategoryId, onSelectCategory }) => {
  return (
    <aside className="lg:w-1/4 bg-white p-6 rounded-xl shadow-lg h-fit sticky top-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Macro Areas
      </h2>
      <nav>
        <ul className="space-y-2">
          {CATEGORIES.map((category: Category) => {
            const isSelected = category.id === selectedCategoryId;
            const baseClass = 'flex items-center p-3 rounded-lg transition-all duration-200 cursor-pointer';
            
            let activeClass = '';
            if (isSelected) {
              // I add the background class and colored text when selected
              activeClass = `${category.colorClass.replace('text-', 'bg-').replace('600', '100')} ${category.colorClass.replace('border-', 'text-')}`;
            } else {
              activeClass = 'text-gray-700 hover:bg-gray-100';
            }

            return (
              <li key={category.id}>
                <button
                  onClick={() => onSelectCategory(category.id)}
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
    </aside>
  );
};