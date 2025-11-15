import React from 'react';
import { Tag, Link as LinkIcon } from 'lucide-react';
import Image from 'next/image'; // Imported the Next.js Image component

// I use import aliases (@/) to avoid relative path errors
import { Tool } from '@/types/interfaces';
import { getCategoryColor } from '@/utils/colorUtils';

/**
 * Component for a single tool card.
 */
interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  // I extract the base color class for borders, text, and light background
  const colorClass = getCategoryColor(tool.categoryId).replace('border-', ''); 

  return (
    <div
      className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${getCategoryColor(tool.categoryId)}`}
      style={{ borderColor: colorClass }}
    >
      <div className="flex items-center mb-4">
        {/* I use Next.js <Image /> for optimization */}
        <Image
          src={tool.logoUrl}
          alt={`Logo for ${tool.name}`}
          width={40} // Required size for <Image />
          height={40} // Required size for <Image />
          className="rounded-lg mr-4 object-cover"
          // I only mark it unoptimized if it is a placeholder URL
          unoptimized={tool.logoUrl.startsWith('https://placehold.co')} 
        />
        <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
      </div>
      
      {/* Removed min-h-[60px] for better space management on mobile */}
      <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tool.tags.map((tag, index) => (
          <span
            key={index}
            className={`flex items-center text-xs font-semibold px-3 py-1 rounded-full 
              ${colorClass.replace('bg', 'text').replace('600', '700')} 
              ${colorClass.replace('border-', 'bg-').replace('600', '100')}`}
          >
            <Tag size={12} className="mr-1" />
            {tag}
          </span>
        ))}
      </div>
      
      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center font-medium ${colorClass.replace('border-', 'text-')} hover:underline transition-colors duration-200`}
      >
        Visit Website
        <LinkIcon size={16} className="ml-1" />
      </a>
    </div>
  );
};