import React, { useState, useEffect } from "react";

export function StatusBar() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const formattedDate = time.toLocaleDateString([], { weekday: "short", month: "short", day: "2-digit", year: "numeric" });

    const statusBarStyle = {
        position: "fixed",
        top: "8px",
        right: "16px",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "8px 16px",
        fontSize: "12px",
        fontWeight: 500,
        color: "#4b5563",
        borderRadius: "999px",
        flexWrap: "wrap",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
    };

    const darkModeStyle = {
        color: "#d1d5db",
        background: "rgba(0, 0, 0, 0.2)",
    };

    const iconContainerStyle = {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    };

    const iconStyle = {
        width: "16px",
        height: "16px",
    };

    const dividerStyle = {
        height: "12px",
        width: "1px",
        background: "#d1d5db",
    };

    const timeDateStyle = {
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
    };

    return (
        <div style={{ ...statusBarStyle, ...darkModeStyle }}>
            <div style={iconContainerStyle}>
                <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h.01"></path>
                    <path d="M2 8.82a15 15 0 0 1 20 0"></path>
                    <path d="M5 12.859a10 10 0 0 1 14 0"></path>
                    <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
                </svg>
                <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path>
                    <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></path>
                    <path d="m11 7-3 5h4l-3 5"></path>
                    <line x1="22" x2="22" y1="11" y2="13"></line>
                </svg>
                <span>100%</span>
            </div>
            <div style={dividerStyle}></div>
            <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
            </svg>
            <div style={dividerStyle}></div>
            <div style={timeDateStyle}>
                <span>{formattedTime}</span>
                <span>{formattedDate}</span>
            </div>
        </div>
    );
}
