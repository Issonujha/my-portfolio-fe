import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function toSlug(tab) {
  return tab.toLowerCase().replace(/_/g, '-');
}


export function Navbar() {
    const { isDark, toggleTheme } = useTheme();

    const tabs = ["home", "experience", "contact", "projects"];

    return (
        <>
            <header className={`${styles.navbar} ${isDark ? styles.dark : ""}`}>
                <div className={styles.container}>
                    <nav>
                        <ul className={styles.navList}>
                            {tabs.map(tab => {
                                const slug = toSlug(tab);
                                return (
                                    <li key={tab}>
                                    <Link
                                        to={`/${slug}`}
                                        className={`${styles.navItem} ${styles.noUnderline}`}
                                    >
                                        {tab.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                                    </Link>
                                    </li>
                                );
                            })}
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
