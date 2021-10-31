import * as mongoose from 'mongoose';

export default class Database {

  private mongoUri: string;

  constructor(mongoUri: string) {
    this.mongoUri = mongoUri;
  }

  public async open() {
    return await mongoose.connect(this.mongoUri);
  }

  public async close() {
    await mongoose.disconnect();
  }
}
