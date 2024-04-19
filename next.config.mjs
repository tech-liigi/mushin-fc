/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: "1cbl4njj",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_SECRET_TOKEN: "skyUEdrCb0ZstPmjWS1HzQiMXDd5VqkV3mLvovGkf5AybQczMipvgYXY6SGUrm9rK1wd4HY9GBsY0q6CVY6KXKBGIwgtQStzEzoc4I4OYCqqqk01jd2BcYcHyjNUTOGf9W0rR0x6h7vFtsKTyTfOVF47OGp9wZJMhjKmDq36VElN0FbzH6a9",
  },
};

export default nextConfig;
