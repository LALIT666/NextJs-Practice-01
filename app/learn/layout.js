export default function LearnLayout({ children }) {
  return (
    <div>
      <header>
        <h2>Learn Section Header</h2>
      </header>
      <section>
        {children} {/*<e jo bhi page hai usko show karega */}
      </section>
      <footer>
        <p>Learn Section Footer</p>
      </footer>
    </div>
  );
}
