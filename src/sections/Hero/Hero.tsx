import React from "react";
import { HERO_DATA } from "../../constants/data";
import { Button } from "../../components/UI/Button/Button";
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <span className={styles.badge}>Доступ для проектов</span>
                <h1 className={styles.name}>{HERO_DATA.name}</h1>
                <h2 className={styles.title}>{HERO_DATA.title}</h2>
                <p className={styles.description}>{HERO_DATA.description}</p>

                <div className={styles.actions}>
                    <Button onClick={scrollToContact} variant='primary'>
                        Связаться со мной
                    </Button>
                </div>
            </div>
        </section>
    )
};

export default Hero;