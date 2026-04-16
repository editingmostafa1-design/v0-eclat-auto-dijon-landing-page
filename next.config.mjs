/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // ── Image Optimization ────────────────────────────────────────────────────
  // Re-enabled to serve WebP/AVIF instead of raw JPEGs.
  // Hero images (~1.18MB raw) will be compressed and resized per breakpoint.
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256],
  },

  // ── HTTP Cache Headers ────────────────────────────────────────────────────
  // Aggressively caches static assets on Vercel's edge network.
  // This directly improves TTFB for repeat visitors.
  async headers() {
    return [
      {
        // Cache all static assets (JS, CSS, images, fonts) for 1 year
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache optimized images for 1 year
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Serve HTML pages from edge cache for 1 day, revalidate in background
        source: '/((?!_next).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ]
  },
}

export default nextConfig
