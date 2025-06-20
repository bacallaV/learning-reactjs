import { useNavigate, useParams } from "react-router-dom"
import { blogPosts } from "../data/blog-posts";

export function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const blogPost = blogPosts.find(post => post.slug === slug);

  function handleBack() {
    navigate('/blog');
  }

  return (
    <section>
      <article>
        <h1>{blogPost ? blogPost.title : "Blog Post Not Found"}</h1>
        <p>{blogPost ? blogPost.post : ""}</p>
      </article>
      <button onClick={handleBack}>
        Volver al Blog
      </button>
    </section>
  )
}

