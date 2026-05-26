import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from '@google/genai';
import nodemailer from 'nodemailer';

const ai = new GoogleGenAI({ apiKey: process.env.AI_API_KEY });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не разрешен' });
  }

  const { name, phone, email, comment } = req.body;

  // Базовая проверка на сервере
  if (!name || !phone || !email || !comment) {
    return res.status(400).json({ error: 'Все поля обязательны для заполнения' });
  }

  try {
    //Отправляем комментарий в AI для анализа и суммаризации
    const aiResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        Ты — AI-ассистент на сайте разработчика. Проанализируй входящую заявку от потенциального клиента/работодателя.
        Сделай краткую выжимку (Summary) и определи приоритет (Низкий, Средний, Высокий) на основе текста.
        
        Данные заявки:
        Имя: ${name}
        Комментарий: ${comment}
        
        Верни ответ строго в формате:
        **Краткая выжимка:** [текст выжимки]
        **Оценка/Приоритет:** [Приоритет]
      `,
    });

    const aiSummary = aiResponse.text || 'Не удалось сгенерировать выжимку.';

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NOTIFICATION_EMAIL,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const mailToAdmin = {
      from: `"Портфолио Заявка" <${process.env.NOTIFICATION_EMAIL}>`,
      to: process.env.NOTIFICATION_EMAIL,
      subject: `🔥 Новая заявка от ${name}!`,
      html: `
        <h2>Новое сообщение с сайта-портфолио</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Оригинальный комментарий:</strong></p>
        <blockquote style="background: #f4f4f4; padding: 10px; border-left: 4px solid #0070f3;">
          ${comment}
        </blockquote>
        
        <hr />
        <h3>🤖 Анализ от AI Помощника:</h3>
        <div style="background: #eef6ff; padding: 15px; border-radius: 5px;">
          ${aiSummary.replace(/\n/g, '<br>')}
        </div>
      `,
    };

    await transporter.sendMail(mailToAdmin);

    return res.status(200).json({ success: true, message: 'Заявка успешно обработана и отправлена!' });

  } catch (error: unknown) {
    console.error('Ошибка на бэкенде:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
    
    return res.status(500).json({ 
      error: 'Внутренняя ошибка сервера', 
      details: errorMessage 
    });
  }
}