import { notFound } from "next/navigation";

const posts = [
  {
    slug: "post-1",
    title: "First Post",
    content: "This is the content of the first post",
  },
  {
    slug: "post-2",
    title: "Second Post",
    content: "This is the content of the second post",
  },
  {
    slug: "post-3",
    title: "Third Post",
    content: "This is the content of the third post",
  },
];

export default function BlogDetailPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
