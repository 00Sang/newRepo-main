import React, { useState } from "react";

const ExaminationNews = () => {
  // Sample news data
  const newsData = [
    {
      id: 1,
      title: "Final Exam Schedule Released",
      date: "January 20, 2025",
      category: "Examination Schedule",
      description: "The final examination schedule for all programs has been released. Students are advised to check their respective schedules.",
    },
    {
      id: 2,
      title: "Midterm Results Declared",
      date: "January 15, 2025",
      category: "Results Update",
      description: "The midterm examination results for the Fall semester are now available. Log in to the student portal to view your results.",
    },
    {
      id: 3,
      title: "Rescheduled Exam Notification",
      date: "January 10, 2025",
      category: "Announcements",
      description: "Due to unforeseen circumstances, the Mathematics exam originally scheduled for January 12 has been rescheduled to January 19.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // Filter news by category
  const filteredNews =
    activeCategory === "All"
      ? newsData
      : newsData.filter((news) => news.category === activeCategory);

  return (
    <div className="min-h-screen mt-24 bg-gray-50 py-10 px-4">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Examination News
      </h1>

      {/* Category Filters */}
      <div className="flex justify-start lg:justify-center space-x-4 mb-8  overflow-auto">
        {["All", "Examination Schedule", "Results Update", "Announcements"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-lg whitespace-nowrap font-semibold rounded-full transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredNews.map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {news.title}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{news.date}</p>
            <p className="text-gray-700 mb-4">
              {news.description.slice(0, 100)}...
            </p>
            <button className="text-blue-600 font-semibold hover:underline">
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* No News Found */}
      {filteredNews.length === 0 && (
        <p className="text-gray-500 text-center mt-8">
          No news available for this category.
        </p>
      )}
    </div>
  );
};

export default ExaminationNews;
