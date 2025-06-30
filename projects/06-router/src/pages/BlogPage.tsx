import { Link } from "react-router-dom";

import { useBlogPost } from "../contexts/blog-post";

export function BlogPage() {
  const { blogPosts } = useBlogPost();

  return (
    <div>
      <h1>Blog Page</h1>

      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link to={`${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

