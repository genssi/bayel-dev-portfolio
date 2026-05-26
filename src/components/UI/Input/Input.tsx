import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  isTextArea?: boolean;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  isTextArea = false,
  error,
  id,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      
      {isTextArea ? (
        <textarea
          id={id}
          className={`${styles.input} ${styles.textarea} ${error ? styles.inputError : ''}`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};