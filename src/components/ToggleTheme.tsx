import { useState, useEffect } from "preact/hooks";
import PhMoonFill from "~icons/ph/moon-fill";
import PhSunFill from "~icons/ph/sun-fill";

export default function ToggleTheme() {

  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme;
      }
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={"Toggle Theme"}
    >
      {theme === "light" ? (
        <PhMoonFill style={{ fontSize: "1.2em" }} />
      ) : (
        <PhSunFill style={{ fontSize: "1.2em",
        color: "#ecc204",
        }} />
      )}
      <span class="sr-only">Toggle Theme</span>
    </button>
  );
}
