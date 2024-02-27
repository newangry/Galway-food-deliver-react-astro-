import { useState, useEffect } from "preact/hooks";
import PhMoonFill from "~icons/ph/moon-fill";
import PhSunFill from "~icons/ph/sun-fill";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      setTheme(storedTheme ?? "dark");
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
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
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
