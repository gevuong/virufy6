// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.mjs'))
const isProd = process.env.NODE_ENV === 'production'

/** @type {import("next").NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  /**
   * Set base path. This is the slug of your GitHub repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: isProd ? '/virufy6' : '',
  // i18n: {
  //   locales: ['en', 'es', 'pt', 'jp'],
  //   defaultLocale: 'en',
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*', // automatically handles all locales
  //       destination:
  //         'https://scidroidgames-gmailcom-cms.payloadcms.app/api/:path*', // automatically passes the locale on
  //     },
  //     {
  //       source: '/media/:path*', // automatically handles all locales
  //       destination:
  //         'https://scidroidgames-gmailcom-cms.payloadcms.app/media/:path*', // automatically passes the locale on
  //     },
  //   ]
  // },
}

export default nextConfig
