import React from 'react';
import styles from './Skills.module.css';

const skillsData = [
  {
    name: 'React',
    level: 'Expert',
  },
  {
    name: 'Next.js',
    level: 'Expert',
  },
  {
    name: 'JavaScript',
    level: 'Expert',
  },
  {
    name: 'HTML',
    level: 'Expert',
  },
  {
    name: 'CSS',
    level: 'Expert',
  },
  {
    name: 'TypeScript',
    level: 'Professional',
  },
  {
    name: 'Tailwind CSS',
    level: 'Professional',
  },
  {
    name: 'Docker',
    level: 'Professional',
  },
  {
    name: 'Jira',
    level: 'Professional',
  },
  {
    name: 'CI/CD',
    level: 'Professional',
  },
  {
    name: 'Git',
    level: 'Professional',
  },
  {
    name: 'Python',
    level: 'Beginner',
  },
  {
    name: 'Node.js',
    level: 'Professional',
  },
];

function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <p className={styles.skillLevel}>{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;