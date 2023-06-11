export default async function PostsPage() {
  const data = await getData();

  return <h1 className="text-3xl font-bold underline">{JSON.stringify(data)}</h1>;
}

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts');

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
