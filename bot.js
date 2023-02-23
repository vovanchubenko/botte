const { createCanvas } = require('canvas');
const Telegraf = require('telegraf');
const bot = new Telegraf('6216248779:AAERKYlQDU-HD7ix6eIZJsN8xBgX4btUiKw');

// Обработчик сообщений от пользователя
bot.on('text', (ctx) => {
  const message = ctx.message.text; // текст сообщения пользователя

  // Создание нового холста для изображения
  const canvas = createCanvas(400, 200);
  const ctxCanvas = canvas.getContext('2d');

  // Настройка шрифта и цвета текста
  ctxCanvas.font = 'bold 24px Arial';
  ctxCanvas.fillStyle = '#333';
  ctxCanvas.textAlign = 'center';
  ctxCanvas.textBaseline = 'middle';

  // Рисование текста на холсте
  ctxCanvas.fillText(message, canvas.width/2, canvas.height/2);

  // Отправка изображения пользователю
  ctx.replyWithPhoto({ source: canvas.toBuffer() });
});

// Запуск бота
bot.launch();
