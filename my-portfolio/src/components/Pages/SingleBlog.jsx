import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogPosts } from "../../blogs/blogindex";
import { marked } from "marked";

const SingleBlog = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const blog = blogPosts.find((post) => post.slug === slug);
    if (blog) {
      blog.file().then((res) =>
        fetch(res.default)
          .then((r) => r.text())
          .then((text) => setContent(marked(text)))
      );
    }
  }, [slug]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-indigo">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default SingleBlog;
