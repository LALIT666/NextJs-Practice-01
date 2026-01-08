import Link from "next/link";

export default function BlogCard({ slug, title }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{title}</h3>
      <Link href={`/blog/${slug}`}>Read More</Link>
    </div>
  );
}
