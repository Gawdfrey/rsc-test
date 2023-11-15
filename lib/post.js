import fs from "fs";

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function getPost(name) {
  const post = await fs.promises.readFile(`./posts/${name}.txt`, "utf-8");
  return {
    title: name.replace("-", " "),
    content: post,
  };
}

export async function getPosts() {
  const posts = await fs.promises.readdir("posts");
  return posts.map((post) => {
    const postWithoutExtension = post.replace(".txt", "");
    return {
      title: postWithoutExtension.replace("-", " "),
      slug: postWithoutExtension,
    };
  });
}

export async function getPostDescription(name) {
  const post = await getPost(name);

  await sleep(2000);

  return `
    ${post.content.substring(0, 10)}...
  `;
}

export async function getAuthor() {
  const author = await fs.promises.readFile(`./author.txt`, "utf-8");

  await sleep(10000);

  return author;
}
