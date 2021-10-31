import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

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
}

export default Server;
