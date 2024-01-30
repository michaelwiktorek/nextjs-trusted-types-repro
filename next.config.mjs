/** @type {import('next').NextConfig} */

const securityHeaders = [
    {
        key: "content-security-policy",
        value: "require-trusted-types-for 'script'; trusted-types nextjs#bundler nextjs;",
    },
];

const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: "/:path*",
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;
