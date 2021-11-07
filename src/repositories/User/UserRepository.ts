import { userModel } from "./userModel";
import BaseRepository from "../BaseRepository";

export default class UserRepository extends BaseRepository {

  private static instance: UserRepository;

  constructor() {
    super(userModel);
  }

  public static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }
    return UserRepository.instance;
  }

  public async create(data: any) {
    console.log("UserRepository - Create");
    return await super.create(data);
  }
 
  public async list(conditions: any, projections: any, options?: any) {
    console.log("UserRepository - List:");
    return await super.getAll(conditions, projections, options);
  }

  public async update(conditions: any, newData: any) {
    console.log("UserRepository - List:");
    return await super.update(conditions, newData);
  }
}
