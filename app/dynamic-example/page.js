import Link from "next/link";

const items = ["apple", "banana", "mango"];

export default function DynamicExample() {
  return (
    <main>
      <h1>Dynamic Route Example</h1>
      {items.map((item) => (
        <p key={item}>
          <Link href={`/dynamic-example/${item}`}>{item}</Link>
        </p>
      ))}
    </main>
  );
}
