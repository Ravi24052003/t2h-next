"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Link from "next/link";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Initial visible count
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for filter

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://t2hdashboard.theholistay.in/public-blogs");
        console.log(response.data); // Debugging: Check API response
        setBlogs(
          response.data.map((blog) => ({
            ...blog,
            blog_image: blog.blog_image.startsWith("http")
              ? blog.blog_image
              : `https://t2hdashboard.theholistay.in/${blog.blog_image}`, // Append base URL to relative path
            fallback_image: "/fallback-image.png", // Add fallback image property




          })),
          
        );
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Increase visible count by 6
  };

  const handleShowLess = () => {
    setVisibleCount(6); // Reset to initial visible count
  };

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.blog_category === selectedCategory);

  const categories = ["All", ...new Set(blogs.map((blog) => blog.blog_category))]; // Extract unique categories

  return (
    <>
      <Navbar />

      {/* Hero Video */}
      <div className="rounded-b-lg bg-gray-100">
        <video
          src="/images/hero.mp4"
          playsInline
          width="100%"
          className="rounded-b-lg w-full h-[350px] lg:h-[450px] object-fill"
          autoPlay
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Blog Cards */}
      <div className="bg-gray-100 py-10 px-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-[#01055b] md:text-5xl text-3xl font-bold text-center flex-1">
            Latest Posts
          </h1>
          <div className="ml-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredBlogs.slice(0, visibleCount).map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <Link href={`/blog/${blog.blog_slug}`}>
                <img
                  src={blog.blog_image}
                  alt={blog.blog_title}
                  className="w-full h-[250px] object-cover"
                />
              </Link>
              <div className="p-4">
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {blog.blog_category}
                </p>
                <Link href={`/blog/${blog.blog_slug}`}>
                  <h2 className="text-lg font-bold text-gray-900 mb-3">
                    {blog.blog_title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                    {blog.blog_description}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    By {blog.blog_author_name}
                  </p>
                </Link>
                <Link href={`/blog/${blog.blog_slug}`}>
                <h1
                //   href={`/blog/${blog.blog_slug}`}
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Read more &rarr;
                </h1>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          {visibleCount < filteredBlogs.length && (
            <button
              onClick={handleLoadMore}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 mr-4"
            >
              Load More
            </button>
          )}
          {visibleCount > 6 && (
            <button
              onClick={handleShowLess}
              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
