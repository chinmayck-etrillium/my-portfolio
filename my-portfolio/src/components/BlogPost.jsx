import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    // Load Markdown content
    fetch(`/blog/${slug}.md`)
      .then((res) => res.text())
      .then(setContent);

    // Load metadata (title, date)
    fetch(`/blog/${slug}.json`)
      .then((res) => res.json())
      .then(setMeta);
  }, [slug]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 prose prose-indigo">
      <p className="text-indigo-600 text-sm mb-2">
        ← <Link to="/blog">Back to Blog</Link>
      </p>

      <h1 className="text-3xl font-bold">{meta.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{meta.date}</p>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
