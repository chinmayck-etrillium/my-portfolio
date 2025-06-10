import { Link } from "react-router-dom";
import { blogPosts } from "../../blogs/blogindex";

const Blog = () => (
    <div className="max-w-5xl mx-auto px-4 py-12 min-h-screen">
    <h1 className="text-4xl font-bold text-indigo-600 mb-10">Blog</h1>
  
    <div className="space-y-10">
      {blogPosts.map((post) => (
        <div key={post.slug} className="border-b pb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            <Link
              to={`/blog/${post.slug}`}
              className=" text-xl font-semibold text-gray-800 hover:underline hover:text-indigo-700"
            >
              {post.title}
            </Link>
          </h2>
          <p className="text-sm text-gray-500 mt-1">{post.date}</p>
          <p className="text-base text-gray-700 mt-2">{post.excerpt}</p>
          <Link
            to={`/blog/${post.slug}`}
            className="text-indigo-600 hover:text-indigo-800 font-medium inline-block mt-2"
          >
            Read more →
          </Link>
        </div>
      ))}
    </div>
  </div>
  
);

export default Blog;
