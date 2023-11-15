import { CreatePost } from "@/components/CreatePost";
import { getPosts, getPostDescription } from "@/lib/post";
import Link from "next/link";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="py-6 px-4 sm:px-6 lg:px-8 gap-10 flex flex-col">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Posts</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <ul className="grid gap-6">
            {posts.map((post, index) => {
              const description = getPostDescription(post.slug);
              return (
                <li
                  key={index}
                  className="p-6 bg-white rounded-lg shadow max-w-md"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </Suspense>
        <CreatePost />
      </main>
    </div>
  );
}
