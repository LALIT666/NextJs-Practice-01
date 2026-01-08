export default async function ServerDataPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();

  return (
    <main>
      <h1>Server Data</h1>
      {posts.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </main>
  );
}
