import { useState } from "react";
import "./MyProfile.css";
import ProjectCard from "./ProjectCard/ProjectCard";

function MyProfile({ callProjectData, projectData, selectedTab, isDarkMode }) {
    const [isCalled, setIscalled] = useState(false);

    if (selectedTab === 'profile' && !isCalled) {
        callProjectData();
        setIscalled(true);
    }

    return (
        <>
            <header>
                <h1>Spring Boot Projects</h1>
            </header>
            <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
                {projectData.map((item, index) => (
                    <ProjectCard
                        key={index}
                        isDarkMode={isDarkMode}
                        item={item}
                    />
                ))}
            </div>
        </>
    );
}

export default MyProfile;