import React from 'react';
import { CONTACTS } from '../../constants/data';
import { Terminal } from 'lucide-react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Terminal size={22} className={styles.logoIcon} />
          <span>Bayel.dev</span>
        </div>
        
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('about')}>Стек</button>
          <button onClick={() => scrollToSection('projects')}>Проекты</button>
          <button onClick={() => scrollToSection('contact')}>Контакты</button>
        </nav>
        
        <a href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className={styles.tgBtn}>
          {CONTACTS.telegram}
        </a>
      </div>
    </header>
  );
};