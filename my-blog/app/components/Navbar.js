import Link from "next/link";

export default function Navbar(){
  return(
    <nav className="flex space-x-6 bg-green-600 px-10 py-5">
      <div><Link href="/" className="text-white">Home</Link></div>
      <div><Link href="/blog" className="text-white">Blog</Link></div>
    </nav>

  );
}