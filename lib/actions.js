"use server";
import fs from "fs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  const filename = formData.get("filename");
  const content = formData.get("content");
  const path = `./public/posts/${filename}.txt`;

  try {
    fs.writeFileSync(path, content);
    revalidatePath("/");
    redirect(`/${filename}`);
  } catch {
    return {
      error: "Something went wrong.",
    };
  }
}
