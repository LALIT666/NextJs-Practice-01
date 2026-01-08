export default function BlogLayout({ children }) {
  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      <header>
        <h2>Blog Header</h2>
      </header>
      <section>{children}</section>
      <footer>
        <p>Blog Footer</p>
      </footer>
    </div>
  );
}
