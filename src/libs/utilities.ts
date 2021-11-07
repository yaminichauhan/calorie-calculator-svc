import * as mongoose from "mongoose";

export const generateObjectId = () => new mongoose.Types.ObjectId();

export const isString = (item: any): boolean => typeof item === "string";
