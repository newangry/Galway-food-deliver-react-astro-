import { useState, useEffect } from "preact/hooks";
import PhMoonFill from "~icons/ph/moon-fill";
import PhSunFill from "~icons/ph/sun-fill";

export default function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

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
      class="w-10 h-10 flex items-center justify-center rounded-md"
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
