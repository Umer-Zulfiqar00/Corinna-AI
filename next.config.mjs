/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images:{
        remotePatterns: [
            {
                protocol:'https',
                hostname:'ucarecdn.com'
            },
            {
                protocol:'https',
                hostname:'wordpress-1269066-4577871.cloudways.com',
            },
        ],
    },
};

export default nextConfig;
