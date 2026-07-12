import Link from 'next/link';

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page at /about.</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </main>
  );
}