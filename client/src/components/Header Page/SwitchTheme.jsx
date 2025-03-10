import React, { useEffect, useState } from "react";

const themes = ["theme0", "theme1", "theme2", "theme3", "theme4", "theme5"];

const ThemeSwitcher = () => {
    const [themeIndex, setThemeIndex] = useState(0);
    const [autoSwitch, setAutoSwitch] = useState(true); // Auto-switch enabled by default

    // Set default theme when page loads
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "theme0";
        document.documentElement.setAttribute("data-theme", savedTheme);
        setThemeIndex(themes.indexOf(savedTheme));
    }, []);

    // Set up automatic theme switching interval
    useEffect(() => {
        let intervalId;
        
        if (autoSwitch) {
            intervalId = setInterval(() => {
                const nextTheme = themes[(themeIndex + 1) % themes.length];
                setThemeIndex((themeIndex + 1) % themes.length);
                document.documentElement.setAttribute("data-theme", nextTheme);
                localStorage.setItem("theme", nextTheme);
            }, 10000); // 10 seconds
        }

        // Clean up interval on component unmount or when autoSwitch changes
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [themeIndex, autoSwitch]);

    // Manual theme switch function (still works with click)
    const switchTheme = () => {
        const nextTheme = themes[(themeIndex + 1) % themes.length];
        setThemeIndex((themeIndex + 1) % themes.length);
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
    };



    return (
        
            <svg onClick={switchTheme} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="theme-btn">
                <path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5-5 2.2-5 5zm5-3c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm1-4V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1zm6.1-.1c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.3.4-1 0-1.4zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zm-3.3 5.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.4-1.4zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1zm-6.1.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4c-.4.3-.4 1 0 1.4zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1zm4.3-7.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.3.5.4.8.4s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.3 4.9z"></path>
            </svg>
            
        
    );
};

export default ThemeSwitcher;