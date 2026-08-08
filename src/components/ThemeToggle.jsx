import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
    >
      <span className={`theme-toggle__track ${isDark ? "is-dark" : "is-light"}`}>
        <span className="theme-toggle__thumb">
          {isDark ? <Moon size={13} strokeWidth={2.4} /> : <Sun size={13} strokeWidth={2.4} />}
        </span>
      </span>
    </button>
  );
}
