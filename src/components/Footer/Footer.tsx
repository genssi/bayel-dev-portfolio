import React from 'react';
import { CONTACTS } from '../../constants/data';
import { Mail, Send, Link2, MapPin } from 'lucide-react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.infoBlock}>
            <h3 className={styles.title}>Байэль Эркинбеков</h3>
            <p className={styles.subtitle}>Frontend Developer (React / TypeScript)</p>
            <div className={styles.location}>
              <MapPin size={16} />
              <span>{CONTACTS.location}</span>
            </div>
          </div>

          <div className={styles.linksBlock}>
            <h4>Контакты</h4>
            <div className={styles.contactsList}>
              <a href={`mailto:${CONTACTS.email}`} className={styles.contactItem}>
                <Mail size={18} />
                <span>{CONTACTS.email}</span>
              </a>
              <a href={`https://t.me/${CONTACTS.telegram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <Send size={18} />
                <span>Telegram</span>
              </a>
              <a href={CONTACTS.github} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <Link2 size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} | Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};