import { getPost } from "@/app/post";

export default async function Home({ params }) {
  const post = await getPost(params.post);
  return (
    <main className="flex-grow py-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>
      <span>{post.content}</span>
    </main>
  );
}
