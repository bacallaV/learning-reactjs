import React from "react";

import { blogPosts as staticBlogPosts } from "../data/blog-posts";

export type BlogPostContextType = {
  blogPosts: typeof staticBlogPosts;
  findPost: (slug: string) => typeof staticBlogPosts[0] | undefined;
  deletePost: (slug: string) => void;
}

const BlogPostContext = React.createContext<BlogPostContextType>({
  blogPosts: [],
  findPost: () => undefined,
  deletePost: () => {},
});

export function BlogPostProvider({ children }: { children: React.ReactNode })  {
  const [blogPosts, setBlogPosts] = React.useState(staticBlogPosts);

  const findPost = (slug: string) => {
    return blogPosts.find((post) => post.slug === slug);
  }

  const deletePost = (slug: string) => {
    const doesPostExist = blogPosts.some((post) => post.slug === slug);

    if (!doesPostExist) {
      return;
    }

    setBlogPosts((prevPosts) => {
      return prevPosts.filter((post) => post.slug !== slug);
    });
  };

  return (
    <BlogPostContext.Provider value={{
      blogPosts,
      findPost,
      deletePost,
    }}>
      {children}
    </BlogPostContext.Provider>
  );
}

export function useBlogPost() {
  return React.useContext(BlogPostContext);
}
