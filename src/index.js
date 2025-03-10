import dotenv from "dotenv";
dotenv.config();

import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
console.log("MONGODB_USER:", process.env.MONGODB_USER);


const bootstrap = async () => {
  try {
    await initMongoConnection();
    setupServer();
  } catch (error) {
    console.error(`Exception in bootstrap ${error}`);
  }
};
bootstrap();
console.log("MONGODB_USER:", process.env.MONGODB_USER);
