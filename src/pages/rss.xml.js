import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import sanitizeHtml from "sanitize-html";

export async function get(context) {
  const postImportResult = import.meta.glob("/src/content/blog/*.{md, mdx}", {eager: true});
  const posts = Object.values(postImportResult);
  console.log(posts)
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.frontmatter,
      link: `${context.site}${post.file.replace("/opt/build/repo/src/content/","").replace(".md", "").replace(".mdx", "")}`,
      content: sanitizeHtml(post.compiledContent()),
    })),
  });
}
