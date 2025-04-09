// app/blog/[slug]/page.jsx
import React from "react";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

async function fetchBlogData(slug) {
  try {
    const res = await fetch(`https://t2hdashboard.theholistay.in/public-blog/${slug}`, {
      cache: "no-store", // Ensures fresh data on each request
    });

    if (!res.ok) {
      throw new Error("Failed to fetch the blog data");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return { error: "Error fetching the blog post." };
  }
}

const BlogDetailPage = async ({ params }) => {
  const { slug } = params;
  const data = await fetchBlogData(slug);

  if (data.error) {
    return (
      <>
        <Navbar />
        <div className="max-w-3xl mx-auto p-4">
          <p className="text-red-500">{data.error}</p>
        </div>
        <Footer />
      </>
    );
  }

  const blogData = data;

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{blogData.blog_title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          By {blogData.blog_author_name} | {blogData.blog_category}
        </p>
        {blogData.blog_image && (
          <img
            src={
              blogData.blog_image.startsWith("http")
                ? blogData.blog_image
                : `https://t2hdashboard.theholistay.in/${blogData.blog_image}`
            }
            alt={blogData.blog_title}
            className="w-full h-auto mb-6"
          />
        )}
        <div className="text-gray-700 leading-relaxed">
          {blogData.blog_description}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
