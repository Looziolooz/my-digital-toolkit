My Digital ToolboxThis project is a comprehensive toolkit built with Next.js and Tailwind CSS, serving as a categorized index of essential AI tools and platforms for daily work.FeaturesCategorized Navigation: Tools are sorted into macro areas (e.g., AI Chatbots, AI Design).Search and Filter: Users can filter tools by category.Mobile Responsiveness (Optimized): The design has been optimized for seamless viewing on mobile and tablet devices, including a collapsible category filter for small screens.Live DemoYou can view the live application deployed on Netlify here:https://mydigitaltoolkit.netlify.app/Getting StartedThis project was bootstrapped with create-next-app.PrerequisitesEnsure you have Node.js and npm/yarn/pnpm installed.InstallationClone the repository:git clone [repository-url]
cd my-digital-toolkit
Install dependencies:npm install
# or
yarn install
# or
pnpm install
Running the Development ServerTo start the local development server:npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:3000 with your browser to see the result. The page auto-updates as you edit the files.Project Structure HighlightsThe application is structured using Next.js 14 (App Router):app/page.tsx: The main application page containing state management (filtering).data/tools.ts: Contains the structured data for all tool categories and tool items.components/CategoryFilter.tsx: The sidebar component responsible for category selection. (Refactored for mobile collapse/expand)components/ToolCard.tsx: The display component for individual tools. (Optimized for mobile content flow)Mobile Optimization SummaryThe following changes were made to enhance the user experience on mobile devices:components/CategoryFilter.tsx: The category filter, which serves as the main navigation, is now hidden by default on small screens (<lg) and can be toggled open using a prominent "Filter" button (using the Filter icon from lucide-react). This prevents the large list of categories from dominating the screen in mobile view.components/ToolCard.tsx: The fixed minimum height (min-h-[60px]) on the tool description text was removed. This allows the cards to dynamically adjust their height based on the text length, preventing awkward blank spaces or unnecessary scrolling within the card on narrow mobile screens.