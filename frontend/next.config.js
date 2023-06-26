/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
// module.exports = {
//     async rewrites() {
//         return [
//             {
//                 source: "/api/:path*",
//                 destination: "http://localhost:5005/:path*", // Proxy to Backend
//             },
//         ];
//     },
// };
