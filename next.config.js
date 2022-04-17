/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['nama api'],
    path: '/_next/image',
    loader: 'default',
    disableStaticImages: false,
    formats: ['image/webp'],
  },
};

// module.exports = {
//   async headers(){
//     return[
//       {
//         source:'/:path*',
//         headers:[
//           {
//             key: 'Referrer-Policy',
//             value: 'origin-when-cross-origin'
//           }
//         ]
//       }
//     ]
//   }
// }


module.exports = nextConfig;
