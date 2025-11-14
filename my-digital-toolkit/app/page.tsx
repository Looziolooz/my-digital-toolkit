"use client"; // NECESSARY to use React Hooks (useState, useMemo)

import React, { useState, useMemo } from 'react';
// I use import aliases (@/) to eliminate relative path errors
import { INITIAL_TOOLS } from '@/data/tools'; 
import { ToolCard } from '@/components/ToolCard';
import { CategoryFilter } from '@/components/CategoryFilter'; // Correct named import

// My main Next.js page component
// I assume Tailwind and fonts are correctly configured in layout.tsx and globals.css
const Page: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  // I dynamically filter tools based on the selected category
  const filteredTools = useMemo(() => {
    if (selectedCategoryId === 'all') {
      return INITIAL_TOOLS;
    }
    return INITIAL_TOOLS.filter(tool => tool.categoryId === selectedCategoryId);
  }, [selectedCategoryId]);

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-8">
      {/* I removed CDN imports for Tailwind and fonts to fix the ESLint/Next.js error */}
      
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          My Digital Toolbox
        </h1>
        <p className="text-xl text-gray-600">
          Essential collection of apps and platforms for my daily work.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        
        {/* Category Filter */}
        <CategoryFilter 
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={setSelectedCategoryId}
        />

        {/* Tools Grid */}
        <main className="lg:w-3/4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Current Tools ({filteredTools.length})
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTools.length > 0 ? (
              filteredTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))
            ) : (
              <p className="text-gray-500 md:col-span-2 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                No tools found for the selected category.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;