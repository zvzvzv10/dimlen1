import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, phone, description } = await request.json();

    // Проверяем обязательные поля
    if (!name || !phone || !description) {
      return NextResponse.json(
        { error: 'Не заполнены обязательные поля' },
        { status: 400 }
      );
    }

    // Создаем транспорт для отправки почты
    // Внимание: в production нужно использовать реальные данные SMTP сервера
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.yandex.kz',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Формируем содержимое письма
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || 'lift@dimlen.ru',
      subject: 'Новая заявка на консультацию',
      text: `
        Новая заявка на консультацию:
        
        Имя: ${name}
        Телефон: ${phone}
        Описание задачи: ${description}
      `,
      html: `
        <h2>Новая заявка на консультацию</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Описание задачи:</strong> ${description}</p>
      `,
    };

    // Отправляем письмо
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка при отправке email:', error);
    return NextResponse.json(
      { error: 'Ошибка при отправке заявки' },
      { status: 500 }
    );
  }
} 