import React from "react";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import "./page.css"; // Assuming you have a CSS file for styles

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

async function fetchLatestPosts() {
  try {
    const res = await fetch(`https://t2hdashboard.theholistay.in/public/public-blogs`, {
      cache: "no-store", // Ensures fresh data on each request
    });

    if (!res.ok) {
      throw new Error("Failed to fetch the latest posts");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    return [];
  }
}

const BlogDetailPage = async ({ params }) => {
  const { slug } = await params;

  // Fetch both blog data and latest posts simultaneously
  const [data, latestPosts] = await Promise.all([fetchBlogData(slug), fetchLatestPosts()]);

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

  const filteredLatestPosts = latestPosts.filter((post) => post.blog_slug !== slug);

  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* Banner */}
        <div className="w-full h-72 bg-gray-700 bg-opacity-50 flex items-center justify-center mb-6">
          <h1 className="absolute text-white text-3xl font-bold">{blogData.blog_title}</h1>
        </div>

        {/* Main Content */}
        <div className="container mx-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Blog Details */}
          <div className="lg:col-span-8">
            <article className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
              <h1 className="text-5xl font-bold ">{blogData.blog_title}</h1>
              <div className="bg-gray-500 w-full h-[2px] rounded-lg"></div>
              {blogData.blog_image && (
                <div className="w-full h-[400px] bg-gray-700 bg-opacity-50 mb-4 rounded-md">
                  <img
                    src={blogData.blog_image.startsWith("http")
                      ? blogData.blog_image
                      : `https://t2hdashboard.theholistay.in/${blogData.blog_image}`}
                    alt={blogData.blog_title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              )}
              <p className="text-sm text-gray-500">
                by {blogData.blog_author_name} | {blogData.blog_category}
              </p>
              <p className="text-gray-700 text-2xl shadow-md italic p-4 rounded">{blogData.blog_description}</p>
              <div className="text-gray-800 leading-7">
                <div
                  className="text-gray-800 leading-7 mb-40 overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: blogData.blog_content }}
                ></div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="bg-gray-100 p-4 rounded-xl shadow-md">
              <h2 className="text-lg font-semibold mb-4 border-b-2 border-red-500">Latest Posts</h2>
              <ul className="space-y-4 ">
                {filteredLatestPosts.map((post) => (
                  <li key={post.blog_slug} className="flex bg-white p-2 rounded-lg items-center space-x-4">
                    <div className="w-20 h-16 bg-gray-500 rounded-full overflow-hidden">
                      <img
                      src={ 
                        post.blog_image.startsWith("http")
                          ? post.blog_image
                          : `https://t2hdashboard.theholistay.in/${post.blog_image}`
                      }
                      alt={post.blog_title}
                       className="w-full h-full object-cover rounded-full"
                    />
                    </div>
                    <div className="w-full">
                      <a
                        href={`/blog/${post.blog_slug}`}
                        className="text-blue-600 hover:underline font-semibold block  line-clamp-2 text-sm"
                      >
                        <p className="line-clamp-1">
                        {post.blog_title}</p>
                      </a>
                      <p className="text-gray-500 text-sm line-clamp-2">{post.blog_description}</p>
                    </div>
                  </li>
                ))}
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
