import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to MVMdriver</h1>
      <Link href="/about" className="text-blue-600 underline hover:text-blue-800">
        Go to About Page
      </Link>
    </main>
  );
}
