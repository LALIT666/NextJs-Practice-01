import Link from "next/link";

import BlogCard from "@/components/blogCard";

const posts = [
  { id: 1, slug: "post-1", title: "First Post" },
  { id: 2, slug: "post-2", title: "Second Post" },
  { id: 3, slug: "post-3", title: "Third Post" },
];

export default function BlogPage() {
  return (
    <main>
      <h1>My Blog</h1>
      {posts.map((post) => (
        <BlogCard key={post.id} title={post.title} slug={post.slug}></BlogCard>
      ))}
    </main>
  );
}
