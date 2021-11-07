import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import router from './router';

class Server {

  private app: express.Express;

  constructor() {
    this.app = express();
  }

  get application() {
    return this.app;
  }

  public async init() {
    this.initCors();
    this.initJsonParser();
    this.initSetupRoutes();
  }

  private initJsonParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private initCors() {
    this.app.use(cors({
      optionsSuccessStatus: 200,
      origin: '*'
    }))
  }

  private initSetupRoutes() {
    this.app.use("/api", router);
  }
}

export default Server;
