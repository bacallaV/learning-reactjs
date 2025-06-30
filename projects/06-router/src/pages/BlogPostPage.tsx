import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../contexts/auth";
import { useBlogPost } from "../contexts/blog-post";

export function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { deletePost } = useBlogPost();
  const { findPost } = useBlogPost();

  const blogPost = findPost(slug ?? '');

  const isAuthor = (blogPost?.author === user?.username && user?.role === 'editor') || user?.role === 'admin';

  function handleBack() {
    navigate('/blog');
  }

  function handleDelete() {
    deletePost(blogPost?.slug ?? '');
    handleBack();
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
        <button onClick={handleDelete} type="button">
          Eliminar Post
        </button>
      )}

      <button onClick={handleBack} type="button">
        Volver al Blog
      </button>
    </section>
  )
}

