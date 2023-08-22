/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config) => {
    //     let modularizeImports = null;
    //     config.module.rules.some((rule) =>
    //         rule.oneOf?.some((oneOf) => {
    //             modularizeImports =
    //                 oneOf?.use?.options?.nextConfig?.modularizeImports;
    //             return modularizeImports;
    //         })
    //     );
    //     if (modularizeImports?.["@headlessui/react"])
    //         delete modularizeImports["@headlessui/react"];
    //     return config;
    // },
};

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
