import { CATEGORIES } from '@/data/tools';

/**
 * Function to find the appropriate Tailwind color class for a category.
 * It converts the "text-" class (used for the menu) into "border-" classes.
 * @param categoryId - The ID of the tool's category.
 * @returns The Tailwind color class string (e.g., "border-blue-600").
 */
export const getCategoryColor = (categoryId: string): string => {
  const category = CATEGORIES.find(c => c.id === categoryId);
  // I return the color class, otherwise a fallback color
  return category ? category.colorClass.replace('text-', 'border-') : 'border-gray-400';
};