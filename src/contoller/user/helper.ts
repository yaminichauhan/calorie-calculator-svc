import { IListOutput } from "./entities";

export function convertToUserOutput(user): IListOutput {
  return {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    meals: user.meals
  };
}
