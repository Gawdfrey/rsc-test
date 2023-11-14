import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <nav className="flex items-center justify-between">
        <Link className="text-2xl font-bold text-gray-800 " href="/">
          Blog Title
        </Link>
      </nav>
    </header>
  );
}
