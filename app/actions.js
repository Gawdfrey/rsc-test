"use server";
import fs from "fs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
  const filename = formData.get("filename");
  const content = formData.get("content");
  const path = `./posts/${filename}.txt`;

  try {
    fs.writeFileSync(path, content);
  } catch (e) {
    console.error(e);
    return {
      error: "Something went wrong.",
    };
  }
  revalidatePath("/");
  redirect(`/posts/${filename}`);
}
