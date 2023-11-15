import { CreatePost } from "@/components/CreatePost";
import { getPosts, getPostDescription, getAuthor } from "@/lib/post";
import Link from "next/link";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="py-6 px-4 sm:px-6 lg:px-8 gap-10 flex flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <Author />
        </Suspense>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Posts</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <Posts posts={posts} />
        </Suspense>
        <CreatePost />
      </main>
    </div>
  );
}

async function Author() {
  const author = await getAuthor();
  return (
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Author: {author}</h1>
  );
}

export function Posts({ posts }) {
  return (
    <ul className="grid gap-6">
      {posts.map(async (post) => {
        return <Post key={post.slug} slug={post.slug} title={post.title} />;
      })}
    </ul>
  );
}

async function Post({ slug, title }) {
  const description = await getPostDescription(slug);
  return (
    <li key={slug} className="p-6 bg-white rounded-lg shadow max-w-md">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <span className="text-gray-600 mb-4">{description}</span>
      <div className="flex items-center justify-between">
        <Link
          href={`/posts/${slug}`}
          className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-sm"
        >
          Read More
        </Link>
      </div>
    </li>
  );
}
