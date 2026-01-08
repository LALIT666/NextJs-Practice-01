import Link from "next/link";
import Header from "@/components/header.js";
import Blog from "@/components/blogCard";

export default function Home() {
  return (
    <main>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
        <Blog />
      </p>
    </main>
  );
}
