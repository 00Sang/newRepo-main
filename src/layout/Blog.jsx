import React from "react";
import ccpur_it from "../assets/ccpur_it.jpeg";

const Blog = () => {
  const trendingBlogs = [
    {
      title: "Top 10 Computer Science Project Ideas in 2024 and Beyond",
      image: "https://www.atees.org/blog/wp-content/uploads/2019/06/shutterstock-1199480788.png", // Replace with your image URL
    },
    { title: "Drone Regulations in India: Navigating the Legal and..." },
    { title: "8 Sectors Which Are in Dire Need of Mechanical Engineers" },
    { title: "10 Landmark Judgements in India that Every BA LLB Hons..." },
    { title: "Career Opportunities and Scope for Growth After BTech..." },
    { title: "Top 10 Business Ideas for Fresh MBA Graduates" },
  ];

  const latestBlogs = [
    {
      title: "Navigating Campus Resources at Churachandpur College: A Step-by-Step Guide",
      image: ccpur_it, // Replace with your image URL
    },
    { title: "What is a Flexible Manufacturing System: Its..." },
    { title: "Celebrating Excellence..." },
    { title: "Hosts India's First International..." },
    { title: "International Conference on Artificial Intelligence, Privacy..." },
    { title: "Multidisciplinary Approaches to Sustainable Trade and..." },
  ];

  return (
    <div className="p-8 mt-8 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Trending Blogs Section */}
        <div>
          <h2 className="text-2xl font-bold text-sky-600 mb-4">
            Trending <span className="text-black">Blogs</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Image on the Left */}
            <img
              src={trendingBlogs[0].image}
              alt={trendingBlogs[0].title}
              className="w-full lg:w-1/2 h-auto object-cover rounded-md shadow-md"
            />
            
            {/* Text on the Right */}
            <div className="w-full space-y-2">
              <p className="text-gray-900 text-sm font-semibold">
                {trendingBlogs[0].title}
              </p>
              <ul className="space-y-2">
                {trendingBlogs.slice(1).map((blog, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-800 hover:text-blue-500 cursor-pointer transition"
                  >
                    {blog.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Latest Blogs Section */}
        <div>
          <h2 className="text-2xl font-bold text-sky-600 mb-4">
            Latest <span className="text-black">Blogs</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Image on the Left */}
            <img
              src={latestBlogs[0].image}
              alt={latestBlogs[0].title}
              className="w-full lg:w-1/2 h-auto object-cover rounded-md shadow-md"
            />
            {/* Text on the Right */}
            <div className="w-full space-y-2">
              <p className="text-gray-900 text-sm font-semibold">
                {latestBlogs[0].title}
              </p>
              <ul className="space-y-2">
                {latestBlogs.slice(1).map((blog, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-800 hover:text-blue-500 cursor-pointer transition"
                  >
                    {blog.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
