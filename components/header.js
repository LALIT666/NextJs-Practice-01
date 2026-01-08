import Link from "next/link";
import HeaderButton from "./header-button";

export default function Header() {
  return (
    <>
      <header style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <h2>Next.js App</h2>
        <nav>
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/blog">Blog</Link>
          {" | "}
          <Link href="/about">About</Link>
        </nav>
        <HeaderButton />
      </header>
    </>
  );
}
