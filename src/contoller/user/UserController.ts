
import * as bcrypt from "bcrypt";
import { Response } from "express";
import UserRepository from "../../repositories/User/UserRepository";
import projections from '../../libs/projections';
import { StatusCodes, StatusMessages } from "../../libs/constants";

/**
 * @description class to handle all the jobs related to users
 */
class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = UserRepository.getInstance();

    this.list = this.list.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
  }

  /**
   * @description Displays list of users
   * @param param0 query: To limit the number of records to be fetched and skip any number of documents
   * @param param1 body: Includes those filters based on which the documents are to be filtered
   */
  public async list({ query, body }, res: Response): Promise<any> {
    console.log("Users - List:", JSON.stringify(query), JSON.stringify(body));
    try {
      let users: any[] = await this.userRepository.list(query, projections.user, {limit: 1000, skip: 0});
      return res.send({ status: StatusCodes.OK, data: users});
    } catch (err) {
      console.log('Error in Users controller List :::::::', err);
      res.send({ status: StatusCodes.BAD_REQUEST, message: `${StatusMessages.ERROR}fetching users list ${err}`});
    }
  }

  public async create({ body }, res: Response): Promise<any> {
    console.log("Users - Add:", JSON.stringify(body));
    try {
      let { email, firstName, lastName, password } = body;
      password = bcrypt.hashSync(password, 12);
      await this.userRepository.create({ email, firstName, lastName, password, meals: body?.meals/*mealOn: new Date().toISOString().split("T")[0]*/ });
      return res.send({ status: StatusCodes.OK, message: `${StatusMessages.CREATE}`});
    } catch (err) {
      console.log('Error in User Controller Create :::::::', err);
      res.send({ status: StatusCodes.BAD_REQUEST, message: `${StatusMessages.ERROR}creatingthe user ${err}`});
    }
  }

  public async update({ body }, res: Response): Promise<any> {
    console.log("Users - Add:", JSON.stringify(body));
    const {email, mealOn} = body;
    try {
      await this.userRepository.update({email, mealOn}, { meals: body?.meals });
      return res.send({ status: StatusCodes.OK, message: `${StatusMessages.UPDATE}`});
    } catch (err) {
      console.log('Error in User Controller Update :::::::', err);
      res.send({ status: StatusCodes.BAD_REQUEST, message: `${StatusMessages.ERROR}updating the user ${err}`});
    }
  }
}

export default new UserController();
