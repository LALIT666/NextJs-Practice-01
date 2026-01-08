export default function ItemPage({ params }) {
  return (
    <main>
      <h1>Item: {params.slug}</h1>
      <p>You Clicked on {params.slug}</p>
    </main>
  );
}
