import React from 'react';
import './ProjectCard.css';

function ProjectCard({ isDarkMode, item }) {
    return (
        <div className={`card ${isDarkMode ? 'dark-mode' : ''}`}>
            <img src={item.thumbnail} alt={`${item.name} Thumbnail`} className="card-thumbnail" />
            <div className={`card-content ${isDarkMode ? 'dark-mode' : ''}`}>
                <h2 className={`card-title ${isDarkMode ? 'dark-mode' : ''}`}> {item.name}</h2>
                <p className="card-description">{item.projectItemDetails.description}</p>
                <div className="card-buttons">
                    {item.backendUrl && <a href={item.backendUrl} target="_blank" rel="noreferrer" className="card-button">Backend</a>}
                    {item.frontendUrl && <a href={item.frontendUrl} target="_blank" rel="noreferrer" className="card-button">Frontend</a>}
                </div>
            </div>
        </div >
    );
}

export default ProjectCard;