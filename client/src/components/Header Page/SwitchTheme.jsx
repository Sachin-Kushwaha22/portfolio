import React, { useEffect, useState } from "react";

const themes = ["theme1", "theme2", "theme3", "theme4", "theme5"];

const ThemeSwitcher = () => {
    const [themeIndex, setThemeIndex] = useState(0);

    // Set default theme when page loads
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "theme1";
        document.documentElement.setAttribute("data-theme", savedTheme);
        setThemeIndex(themes.indexOf(savedTheme));
    }, []);

    const switchTheme = () => {
        const nextTheme = themes[(themeIndex + 1) % themes.length];
        setThemeIndex((themeIndex + 1) % themes.length);
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme); // Save theme in local storage
    };

    return (
        <button id="theme-btn" onClick={switchTheme} style={{ padding: "10px 20px", fontSize: "16px" }}>

        </button>
    );
};

export default ThemeSwitcher;
