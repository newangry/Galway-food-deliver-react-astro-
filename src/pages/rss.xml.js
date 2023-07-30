import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import sanitizeHtml from "sanitize-html";

export async function get(context) {
  const postImportResult = import.meta.glob("/src/content/blog/*.{md, mdx}", {eager: true});
  const posts = Object.values(postImportResult);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.frontmatter,
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(post.compiledContent()),
    })),
  });
}
