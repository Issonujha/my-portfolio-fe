import React from "react";
import styles from "./Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";
import { StatusBar } from "../StatusBar/StatusBar";

export function Navbar() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <>
            <StatusBar />
            <header className={`${styles.navbar} ${isDark ? styles.dark : ""}`}>
                <div className={styles.container}>
                    <nav>
                        <ul className={styles.navList}>
                            <li><button className={styles.navItem}>Home</button></li>
                            <li><button className={styles.navItem}>Experience</button></li>
                            <li><button className={styles.navItem}>Contact</button></li>
                            <li><button className={styles.navItem}>Projects</button></li>
                        </ul>
                    </nav>
                    <div className={styles.divider}></div>
                    <button
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label="Switch theme"
                    >
                        {isDark ? (
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" strokeWidth="2">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                        ) : (
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2"></path>
                                <path d="M12 20v2"></path>
                                <path d="m4.93 4.93 1.41 1.41"></path>
                                <path d="m17.66 17.66 1.41 1.41"></path>
                                <path d="M2 12h2"></path>
                                <path d="M20 12h2"></path>
                                <path d="m6.34 17.66-1.41 1.41"></path>
                                <path d="m19.07 4.93-1.41 1.41"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </header>
        </>
    );
}
