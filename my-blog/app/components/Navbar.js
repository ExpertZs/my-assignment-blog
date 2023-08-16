import Link from "next/link";

export default function Navbar(){
  return(
    <nav className="flex space-x-6 bg-green-600 px-10 py-5">
      <div><Link href="/">Home</Link></div>
      <div><Link href="/blog">Blog</Link></div>
    </nav>

  );
}