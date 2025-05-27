// src/pages/Blog.jsx
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How to Build Wealth with a Data-Driven Approach",
    date: "May 25, 2025",
    excerpt:
      "A data-driven approach allows you to base your investment and financial decisions on factual trends rather than emotions...",
    slug: "data-driven-wealth",
  },
  {
    id: 2,
    title: "Understanding SIFs – The Most Underrated Investment Vehicle",
    date: "May 20, 2025",
    excerpt:
      "Systematic Investment Funds (SIFs) offer consistency, discipline, and customization. Here’s why I swear by them...",
    slug: "understanding-sifs",
  },
];

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Blog</h1>
      <div className="space-y-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {blog.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
            <p className="text-gray-700 mb-2">{blog.excerpt}</p>
            <Link
              to={`/blog/${blog.slug}`}
              className="text-indigo-600 hover:underline font-medium"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
