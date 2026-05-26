import React, { useState } from 'react';
import { Input } from '../../components/UI/Input/Input';
import { Button } from '../../components/UI/Button/Button';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import styles from './ContactForm.module.scss';

interface FormData {
  name: string;
  phone: string;
  email: string;
  comment: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  comment?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    comment: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения';
    }

    // проверка телефона (только цифры, плюсы и знаки, от 7 символов)
    const phoneRegex = /^[\d\s()+-]{7,20}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Телефон обязателен';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Неверный формат телефона';
    }

    // Валидация Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }

    if (!formData.comment.trim()) {
      newErrors.comment = 'Напишите комментарий или суть обращения';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Отправка формы на бэкенд
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', comment: '' }); // Очистка формы
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      setStatus('error');
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Обратная связь</h2>
        <p className={styles.sectionSubtitle}>
          Оставьте заявку, и AI-помощник автоматически обработает её, определит приоритет и перенаправит мне на почту.
        </p>

        <div className={styles.formWrapper}>
          {status === 'success' && (
            <div className={styles.successBlock}>
              <CheckCircle className={styles.successIcon} size={48} />
              <h3>Сообщение успешно отправлено!</h3>
              <p>Копия письма отправлена на указанный вами Email. Я свяжусь с вами в ближайшее время.</p>
              <Button variant="secondary" onClick={() => setStatus('idle')}>Отправить еще раз</Button>
            </div>
          )}

          {status === 'error' && (
            <div className={styles.errorBlock}>
              <XCircle className={styles.errorIcon} size={48} />
              <h3>Произошла ошибка</h3>
              <p>Не удалось отправить сообщение. Пожалуйста, попробуйте позже или свяжитесь со мной напрямую.</p>
              <Button variant="primary" onClick={() => setStatus('idle')}>Попробовать снова</Button>
            </div>
          )}

          {(status === 'idle' || status === 'loading') && (
            <form onSubmit={handleSubmit} className={styles.form}>
              <Input
                label="Ваше имя"
                id="name"
                type="text"
                placeholder="Иван"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                disabled={status === 'loading'}
              />

              <Input
                label="Телефон"
                id="phone"
                type="tel"
                placeholder="+996 (555) 12-34-56"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                disabled={status === 'loading'}
              />

              <Input
                label="Email"
                id="email"
                type="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                disabled={status === 'loading'}
              />

              <Input
                label="Комментарий / Суть обращения"
                id="comment"
                isTextArea={true}
                placeholder="Опишите ваш проект или предложение о вакансии..."
                value={formData.comment}
                onChange={handleChange}
                error={errors.comment}
                disabled={status === 'loading'}
              />

              <Button type="submit" isLoading={status === 'loading'} variant="primary" className={styles.submitBtn}>
                <Send size={18} style={{ marginRight: '0.5rem' }} />
                Отправить сообщение
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;