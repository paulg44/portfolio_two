import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/pages/blog">Blog</Link>
      <Link href="/pages/contact">Contact</Link>
    </nav>
  );
}
