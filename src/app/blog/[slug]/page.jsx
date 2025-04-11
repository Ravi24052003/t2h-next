import React from "react";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import "./page.css"; // Assuming you have a CSS file for styles
// import { Card, CardContent } from "@/components/ui/card";

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
      <div className="w-full">
        {/* Banner */}
        <div className="w-full h-72 bg-gray-700 bg-opacity-50 flex items-center justify-center mb-6">
          <h1 className="absolute text-white text-3xl font-bold">{blogData.blog_title}</h1>
        </div>

        {/* Additional Component Below Banner */}
        <div className="container mx-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Blog Details */}
            <article className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
              <h1 className="text-5xl font-bold ">{blogData.blog_title}</h1>
              <div className="bg-gray-500 w-full h-[2px] rounded-lg"></div>
              {blogData.blog_image && (
                <div className="w-full h-[400px] bg-gray-700 bg-opacity-50 mb-4 rounded-md">
                  <img
                    src={
                      blogData.blog_image.startsWith("http")
                        ? blogData.blog_image
                        : `https://t2hdashboard.theholistay.in/${blogData.blog_image}`
                    }
                    alt={blogData.blog_title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              )}
              <p className="text-sm text-gray-500">by {blogData.blog_author_name} | {blogData.blog_category}</p>
              <p className="text-gray-700 text-2xl shadow-md italic p-4 rounded">{blogData.blog_description}</p>
              <div className="text-gray-800 leading-7">
              <div
  className="text-gray-800 leading-7 mb-40 overflow-hidden "
  dangerouslySetInnerHTML={{ __html: blogData.blog_content }}
></div>
              </div>
            </article>

            {/* Comment Section */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Comments</h2>
              <div className="space-y-4">
                {/* Example Comment */}
                {/* <Card className="shadow-md">
                  <CardContent>
                    <p><strong>John Doe:</strong> Great article! Very informative.</p>
                  </CardContent>
                </Card> */}

                {/* Add Comment */}
<div className="mt-4">
  <input
    type="text"
    placeholder="Add a comment..."
    className="w-full border border-gray-300 rounded-lg p-2"
  />
  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    Submit
  </button>
</div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-gray-100 p-4 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold mb-4 border-b-2 border-red-500">Latest Posts</h2>

              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <img
                    src="/path-to-thumbnail1.jpg"
                    alt="Post 1 Thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a href="#" className="text-blue-600 hover:underline font-semibold block">
                      Latest Post 1
                    </a>
                    <p className="text-gray-500 text-sm">Brief content for post 1...</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <img
                    src="/path-to-thumbnail2.jpg"
                    alt="Post 2 Thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a href="#" className="text-blue-600 hover:underline font-semibold block">
                      Latest Post 2
                    </a>
                    <p className="text-gray-500 text-sm">Brief content for post 2...</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <img
                    src="/path-to-thumbnail3.jpg"
                    alt="Post 3 Thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a href="#" className="text-blue-600 hover:underline font-semibold block">
                      Latest Post 3
                    </a>
                    <p className="text-gray-500 text-sm">Brief content for post 3...</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <img
                    src="/path-to-thumbnail4.jpg"
                    alt="Post 4 Thumbnail"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a href="#" className="text-blue-600 hover:underline font-semibold block">
                      Latest Post 4
                    </a>
                    <p className="text-gray-500 text-sm">Brief content for post 4...</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
