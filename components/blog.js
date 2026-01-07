const posts = [
  { id: 1, title: "First post" },
  { id: 2, title: "Second post" },
];

export default function Blog() {
  return (
    <div>
      <h1>My Blog</h1>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
