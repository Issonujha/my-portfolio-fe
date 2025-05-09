import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, tech, year, image, link }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.stack}><strong>Technologies:</strong> {tech}</p>
      <p className={styles.year}><strong>{year}</strong></p>
      <img src={image} alt={title} className={styles.image} />
      <a href={link} className={styles.button} target="_blank" rel="noopener noreferrer">
        Click To View
      </a>
    </div>
  );
};

export default ProjectCard;
