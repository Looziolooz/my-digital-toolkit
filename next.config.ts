/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Aggiungo 'output: export' per abilitare la static export (sostituisce il vecchio 'next export')
  output: 'export',
  
  // 2. Mantengo la configurazione per le immagini esterne
  images: {
    // Nota: Nel caso di output: 'export', le remotePatterns potrebbero non essere necessarie
    // se non usi un CDN, ma le lascio per sicurezza.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // This allows any path on this hostname
      },
    ],
  },
};

module.exports = nextConfig;