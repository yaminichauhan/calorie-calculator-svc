import { generateObjectId } from '../libs/utilities';


export default abstract class BaseRepository {
  protected modelType: any;
  constructor(modelType) {
    this.modelType = modelType;
  }

  public async create(options) {
    console.log("BaseRepository - Create");

    const id = generateObjectId();
    const model = new this.modelType({
      ...options,
      _id: id
    });    
    return await model.save();
  }

  public async update(conditions: any, newData: any) {
    console.log("BaseRepository - Update");
    return await this.modelType.updateMany(conditions, newData);
  }

  public async getAll(conditions: any, projection?: any | null, options?: any | null) {
    console.log("BaseRepository - Get all");
    return await this.modelType.find(conditions, projection, options);
  }

  public async findOne(conditions: any): Promise<any> {
    console.log("BaseRepository - Get one");
    return await this.modelType.findOne(conditions);
  }

  public async delete(conditions: any): Promise<any> {
    console.log("BaseRepository - Delete One");
    return await this.modelType.deleteOne(conditions);
  }

  public async deleteAll(): Promise<any> {
    console.log("BaseRepository - Delete All");
    return await this.modelType.deleteMany({});
  }
}
