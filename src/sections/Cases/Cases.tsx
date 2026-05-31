import React from "react";
import { PROJECTS, EXPERIENCES } from "../../constants/data";
import { Button } from "../../components/UI/Button/Button";
import { FolderGit2, ExternalLink } from "lucide-react";
import styles from "./Cases.module.scss";

const Cases: React.FC = () => {
    return (
        <section className={styles.cases} id="projects">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Проекты & Опыт работы</h2>
                <div className={styles.experienceTimeline}>
                    {EXPERIENCES.map((exp, id) => (
                        <div key={id} className={styles.expCard}>
                            <div className={styles.expHeader}>
                                <div>
                                    <h3 className={styles.expCompany}>
                                        {exp.company}
                                    </h3>
                                    <h4 className={styles.expRole}>
                                        {exp.role}
                                    </h4>
                                </div>
                                <span className={styles.expPeriod}>
                                    {exp.period}
                                </span>
                            </div>
                            <p className={styles.expDescription}>
                                {exp.description}
                            </p>
                            <ul className={styles.achievementsList}>
                                {exp.achievements.map((ach, achID) => (
                                    <li key={achID}>{ach}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <h3 className={styles.subTitle}>Разработанные кейсы</h3>

                <div className={styles.projectsGrid}>
                    {PROJECTS.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div className={styles.projectContent}>
                                <h4 className={styles.projectTitle}>
                                    {project.title}
                                </h4>
                                <p className={styles.projectDescription}>
                                    {project.description}
                                </p>
                                <div className={styles.projectStack}>
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className={styles.techBadge}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.projectActions}>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.linkWrapper}
                                >
                                    <Button
                                        variant="secondary"
                                        className={styles.actionBtn}
                                    >
                                        <FolderGit2
                                            size={18}
                                            className={styles.btnIcon}
                                        />
                                        GitHub
                                    </Button>
                                </a>
                                {project.deploy && (
                                    <a
                                        href={project.deploy}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.linkWrapper}
                                    >
                                        <Button
                                            variant="primary"
                                            className={styles.actionBtn}
                                        >
                                            <ExternalLink
                                                size={18}
                                                className={styles.btnIcon}
                                            />
                                            Демо
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Центральная кнопка для перехода ко всем остальным проектам на GitHub */}
                <div className={styles.moreProjectsWrapper}>
                    <a
                        href="https://github.com/genssi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            variant="secondary"
                            className={styles.moreProjectsBtn}
                        >
                            <FolderGit2 size={20} className={styles.btnIcon} />
                            Смотреть другие проекты на GitHub
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Cases;
