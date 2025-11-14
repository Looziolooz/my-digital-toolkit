import { ElementType } from 'react';

/**
 * Interface to define a Macro Area/Category (Main Menu).
 * This helps structure my navigation.
 */
export interface Category {
  id: string;
  name: string;
  icon: ElementType;
  colorClass: string; // e.g. "text-blue-600 border-blue-600"
}

/**
 * Interface to define a single tool/app (Tool Card).
 * This is the structure for my toolkit items.
 */
export interface Tool {
  id: number;
  name: string;
  description: string;
  categoryId: string;
  link: string;
  tags: string[];
  logoUrl: string;
}