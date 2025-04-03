console.log('🔄 ENV VARIABLES:', {
  APP_DOMAIN: process.env.APP_DOMAIN,
  CLOUD_NAME: process.env.CLOUD_NAME,
  ENABLE_CLOUDINARY: process.env.ENABLE_CLOUDINARY,
  MONGODB_DB: process.env.MONGODB_DB,
  SMTP_FROM: process.env.SMTP_FROM,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET,
});

import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import { createDirIfNotExists } from './utils/createDirIfNotExists.js';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';
const bootstrap = async () => {
  await initMongoConnection();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(UPLOAD_DIR);
  setupServer();
};
bootstrap();