"use client";
import React, { useEffect, useState } from "react";

export default function Deco() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled in local storage or system preference
    const darkModeEnabled =
      localStorage.getItem("theme") === "dark" ||
      (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setIsDarkMode(darkModeEnabled);
  }, []);

  return (
    <div className="">
      {isDarkMode ? (
        <div className="block">
          <svg
            width="497"
            height="349"
            viewBox="0 0 497 349"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M971.48 -81.7241L0.0855597 -152.617L97.6346 348.424L971.48 -81.7241Z"
              fill="#F4F4F4"
            />
          </svg>
        </div>
      ) : (
        <div className="block">
          <svg
            width="497"
            height="349"
            viewBox="0 0 497 349"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M971.48 -81.7241L0.0855597 -152.617L97.6346 348.424L971.48 -81.7241Z"
              fill="#101010"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
