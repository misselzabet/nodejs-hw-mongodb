import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

const bootstrap = async () => {
  await initMongoConnection();
  console.log('MongoDB підключено успішно'); // Додати лог для перевірки
  setupServer();
  console.log('Сервер запущено'); // Додати лог для перевірки
};

bootstrap();
