import React from 'react';
import styles from './Experience.module.css';
// import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const experiences = [
  {
    role: 'Backend Developer',
    company: 'Actolap Solution Pvt. Ltd.',
    link: 'https://actolap.com',
    duration: '2023 - Present',
    description: 'Developing and maintaining backend services using Java and Spring Boot with integration like mail, worksheet integration. ',
    tags: ['Java', 'MongoDB', 'junit', 'Rest API', 'Postman'],
    // icon: <FaBriefcase />
  },
  {
    role: 'Teach Assistant',
    company: 'Coding Ninjas',
    link: 'https://www.codingninjas.com',
    duration: '2022 - 2022',
    description: 'Teaching Java and Data Structures to students, helping them understand core concepts and solve problems.',
    tags: ['Java', 'Data Structures', 'Algorithms', 'Communication', 'Mentoring', 'debugging'],
    // icon: <FaGraduationCap />
  },
];

export function Experience() {
  return (
    <div className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>My Journey</h2>
      <p className={styles.sectionSubtitle}>Education and Work Experience</p>
      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <div className={styles.timelineItem} key={i}>
            {/* <div className={styles.timelineIcon}>{exp.icon}</div> */}
            <div className={styles.timelineContent}>
              <h3 className={styles.role}>{exp.role}</h3>
              <a href={exp.link} className={styles.company} target="_blank" rel="noreferrer">
                {exp.company}
              </a>
              <p className={styles.duration}>{exp.duration}</p>
              <p className={styles.description}>{exp.description}</p>
              <div className={styles.tags}>
                {exp.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


