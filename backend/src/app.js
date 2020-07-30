import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import consign from 'consign';

import db from './database';

class App {
  constructor() {
    this.server = express();
    db;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.disable('x-powered-by');
    this.server.use(cors());
    this.server.use(helmet());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
  }

  routes() {
    consign()
    .include('./src/routes/admin.routes.js')
    .then('./src/routes/candidate.routes.js')
    .into(this.server);
  }
}

export default new App().server;
