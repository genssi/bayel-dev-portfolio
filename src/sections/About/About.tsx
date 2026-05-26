import React from "react";
import { SKILLS, WORK_APPROACH } from "../../constants/data";
import styles from './About.module.scss';

const About: React.FC = () => {
    return (
        <section className={styles.about} id="about">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Как я работаю & Стек</h2>
                <div className={styles.principlesGrid}>
                    {WORK_APPROACH.principles.map((item, index) => (
                        <div key={index} className={styles.principleCard}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.skillsContainer}>
                    <h3 className={styles.skillsTitle}>Технологический стек</h3>
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillCategory}>
                            <h4>Frontend</h4>
                            <div className={styles.tags}>
                                {SKILLS.frontend.map(skill => <span key={skill}>{skill}</span>)}
                            </div>
                        </div>
                        <div className={styles.skillCategory}>
                            <h4>backend</h4>
                            <div className={styles.tags}>
                                {SKILLS.backend.map(skill => <span key={skill}>{skill}</span>)}
                            </div>
                        </div>
                        <div className={styles.skillCategory}>
                            <h4>Инфраструктура & Инструменты</h4>
                            <div className={styles.tags}>
                                {[...SKILLS.infrastructure, ...SKILLS.tools].map(skill => (
                                    <span key={skill} className={styles.toolTag}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;