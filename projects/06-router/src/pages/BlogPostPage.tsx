import { useNavigate, useParams } from "react-router-dom"
import { blogPosts } from "../data/blog-posts";
import { useAuth } from "../contexts/auth";

export function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const blogPost = blogPosts.find(post => post.slug === slug);

  const isAuthor = (blogPost?.author === user?.username && user?.role === 'editor') || user?.role === 'admin';

  function handleBack() {
    navigate('/blog');
  }

  return (
    <section>
      {blogPost === undefined && (
        <h1>Blog Post Not Found</h1>
      )}

      {blogPost && (
        <article>
          <h1>{blogPost.title}</h1>
          <h2>{blogPost.author}</h2>
          <p>{blogPost.post}</p>
        </article>
      )}

      {isAuthor && (
        <button onClick={handleBack}>
          Eliminar Post
        </button>
      )}

      <button onClick={handleBack}>
        Volver al Blog
      </button>
    </section>
  )
}

