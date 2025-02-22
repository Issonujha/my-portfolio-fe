import { useState } from "react";
import "./TopNav.css";

function TopNavBar({ toggleDarkMode, isDarkMode, isDropdownOpen, toggleDropdown, setSelectedTab }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'active' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="dark-mode-toggle">
                <img
                    title="For enabling light or dark mode feature"
                    src={!isDarkMode ? (localStorage.getItem("imageTheme") ? localStorage.getItem("imageTheme") : "./dark.png") : "./light.png"}
                    onClick={toggleDarkMode}
                    alt="Dark Mode"
                    width={20}
                />
            </div>
            <img src="./pluto.png" className="navbar-brand" alt="Pluto" width={50} />
            <div className={`navbar-links ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
                <a href="#home" className={`navbar-link ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => setSelectedTab('home')}>Home</a>
                <a href="#about" className={`navbar-link ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => setSelectedTab('about')}>About</a>
                <a href="#services" className={`navbar-link ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => setSelectedTab('services')}>Services</a>
                <a href="#contact" className={`navbar-link ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => setSelectedTab('contact')}>Contact</a>
                <div className="navbar-link dropdown" onMouseEnter={() => toggleDropdown(true)} onMouseLeave={() => toggleDropdown(false)} >
                    <button className={`dropdown-btn ${isDarkMode ? 'dark-mode-text' : ''}`}>
                        More
                    </button>
                    {isDropdownOpen && (
                        <div className={`dropdown-menu ${isDarkMode ? 'dark-mode' : ''}`}>
                            <a href="#portfolio" className={`dropdown-item ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => setSelectedTab('portfolio')}>Portfolio</a>
                            <a href="#blog" className={`dropdown-item ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => setSelectedTab('blog')}>Blog</a>
                            <a href="#testimonials" className={`dropdown-item ${isDarkMode ? 'dark-mode-text' : ''}`} onClick={() => setSelectedTab('testimonials')}>Testimonials</a>
                        </div>
                    )}
                </div>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <div className="bar bar1"></div>
                <div className="bar bar2"></div>
                <div className="bar bar3"></div>
            </div>
            <ul className="menu">
                <li className="menu-item">
                    <button className="profile-logo" onClick={() => setSelectedTab('profile')}>
                        <img src="https://myportfoliobucketdata.s3.us-east-2.amazonaws.com/public/emp/a6cc35e0-aa34-4078-b15d-bb80f53ac179/1688377578139.jpg" alt="SJ" width={40} className="profile-logo" />
                    </button>
                    <span>Sonu Jha</span>
                </li>
            </ul>
        </nav>
    );
}

export default TopNavBar;