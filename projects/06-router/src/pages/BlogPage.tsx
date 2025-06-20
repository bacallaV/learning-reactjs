import { Link } from "react-router-dom";

import { blogPosts } from "../data/blog-posts";

export function BlogPage() {
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

