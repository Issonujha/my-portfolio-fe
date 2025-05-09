import React from 'react';
import ProjectCard from './ProjectCard';
import projects from './projectsData';
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>My Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
