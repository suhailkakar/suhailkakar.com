
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'suhailkakar-com.vercel.app',
            },
        ],
    }
};

module.exports = nextConfig;
