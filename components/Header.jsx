"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const pathname = usePathname();
  const theme = useTheme();
  const haveToHaveThisBecauseOfTailwind = "text-[#28a745]";
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <nav className="flex items-center justify-between">
        <Link
          className={`text-2xl font-bold ${
            pathname === "/"
              ? `text-[${theme.colors.success}]`
              : "text-gray-500"
          }`}
          href="/"
        >
          Blog Title
        </Link>
      </nav>
    </header>
  );
}
