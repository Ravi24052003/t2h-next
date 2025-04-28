// "use client";
// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Link from "next/link";

// function WeekendGetway() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://t2hdashboard.theholistay.in/public-weekend-gateway-itineraries");
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const result = await response.json();
//         const formattedData = (Array.isArray(result) ? result : result.result || []).map((item) => ({
//           ...item,
//           destination_images: (item.destination_images || []).map((image) =>
//             image.startsWith("http") ? image : `https://t2hdashboard.theholistay.in/${image}`
//           ),
//           destination_thumbnail: item.destination_thumbnail.startsWith("http")
//             ? item.destination_thumbnail
//             : `https://t2hdashboard.theholistay.in/${item.destination_thumbnail}`,
//             link: item.slug||"#,"
//         }));
//         setData(formattedData);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const settings = {
//     arrows: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="bg-pink-100 py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className=" mb-6">
//         <h2 className="text-2xl font-bold text-gray-900 text-center">Weekend Trending Getaways</h2>

//         <div className="flex justify-center ">
//         <img src="/images/underline-img.png"  className="h-4 w-[300px] text-center" alt="" /></div>
//         </div>

//         <Slider {...settings}>
//           {data.map((item, index) => (
//             <div key={index} className="p-4">
//               <div className="bg-pink-100 p-4 rounded-lg shadow-md">
//                 <img
//                   src={item.destination_thumbnail}
//                   alt={item.title || "Weekend Getaway"}
//                   className="w-full h-[200px] object-cover rounded-t-lg"
//                 />
//                 <div className="mt-4 space-y-1">
//                   <h3 className="font-bold text-lg text-[#261F43] truncate">{item.title}</h3>
//                   <p className="text-sm text-gray-700">
//                     {item.domestic_or_international ? "Domestic" : "International"}
//                   </p>
//                   <p className="text-sm text-gray-700">Duration: {item.duration}</p>
//                   <p className="text-sm text-gray-700">Pricing: {item.pricing || "Request for Quotation"}</p>
//                 </div>
//                 <div className="mt-4 flex items-center justify-between">
//                   <div className="flex items-center gap-2 text-red-600 hover:text-red-500 font-semibold text-2xl">
//                     <svg
//                       stroke="currentColor"
//                       fill="currentColor"
//                       strokeWidth="0"
//                       viewBox="0 0 512 512"
//                       height="1em"
//                       width="1em"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
//                     </svg>
//                   </div>
//                   <Link href={`/destination/${item.slug|| "#"}`} className="w-full"><button className="bg-red-600 hover:bg-red-500 w-full text-white ml-3 px-4 py-2 text-sm rounded-md">
//                     Know More
//                   </button></Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default WeekendGetway;
