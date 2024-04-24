import React from "react";
import { useState, useEffect } from "react";

export default function Toggle() {
  var themeToggleBtn = document.getElementById("toggleBtn");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("color-theme")) {
      setTheme(localStorage.getItem("color-theme"));
    }
  }, []);

  const toggleMode = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setTheme("light");
    }
  };

  return (
    <div onClick={toggleMode} className="absolute top-5 right-5">
      <img
        src={theme === "light" ? "src/Assets/light.png" : "src/Assets/dark.png"}
        id="toggleBtn"
        className="text-yellow-100 h-10"
      />
    </div>
  );
}
