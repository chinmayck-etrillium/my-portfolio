import { Link } from "react-router-dom";
import { blogPosts } from "../../blogs/blogindex";

const Blog = () => (
  <div className="max-w-3xl mx-auto px-4 py-10 min-h-screen">
    <h1 className="text-3xl font-bold mb-8">My Blog</h1>
    {blogPosts.map((post) => (
      <div key={post.slug} className="mb-6">
        <Link to={`/blog/${post.slug}`} className="text-indigo-600 text-xl font-semibold hover:underline">
          {post.title}
        </Link>
        <p className="text-sm text-gray-500">{post.date}</p>
        <p className="text-gray-700">{post.excerpt}</p>
      </div>
    ))}
  </div>
);

export default Blog;
