import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "16px", borderBottom: "1px solid #ccc" }}>
          <nav style={{ display: "flex", gap: "16px" }}>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        <main style={{ padding: "16px" }}>{children}</main>
      </body>
    </html>
  );
}
