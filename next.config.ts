/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aggiungi o modifica la sezione 'images'
  images: {
    // Lista di hostname (domini) esterni da cui è permesso caricare le immagini
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**', // Permette qualsiasi percorso su questo hostname
      },
    ],
  },
};

module.exports = nextConfig;