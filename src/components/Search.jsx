import Fuse from "fuse.js";
import { useState } from "preact/hooks";

// Configs fuse.js
// https://fusejs.io/api/options.html
const options = {
  keys: ["frontmatter.title", "frontmatter.description", "frontmatter.tags"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList }) {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(searchList, options);

  const posts = fuse
    .search(query)
    .map((result) => result.item)

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }
  return (
    <div>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx={10} cy={10} r={7}></circle>
            <line x1={21} y1={21} x2={15} y2={15}></line>
          </svg>
        </div>
        <input
          type="text"
          id="search"
          value={query}
          onChange={handleOnSearch}
          className="block w-full p-4 pl-10
                                text-zinc-900 dark:text-white
                               border border-zinc-500
                               rounded-lg bg-zinc-50 dark:bg-zinc-800
                               focus:outline-none
                               focus:ring-blue-500
                               focus:border-blue-500"
          placeholder="Procure um artigo por assunto ou título"
        />
      </div>

      {query.length > 1 && (
        <div className="my-4">
          {posts.length === 1 ? "Encontrado" : "Encontrados"} {posts.length} {posts.length === 1 ? "resultado" : "resultados"} para '{query}'
        </div>
      )}

      <ul className="list-none">
        {posts &&
          posts.map((post) => (
            <li className="py-2">
              <a
                className="group"
                href={`/${post.file.replace("/opt/build/repo/src/content/","").replace(".md", "").replace(".mdx", "")}`}
              >
                <h2 className="text-lg text-blue-800 dark:text-blue-500 group-hover:text-blue-950 dark:group-hover:text-blue-400 group-hover:underline underline-offset-2 font-medium">
                  {post.frontmatter.title}
                </h2>
                <p className="text-sm text-zinc-800 dark:text-zinc-300">{post.frontmatter.description}</p>
                
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Search;
