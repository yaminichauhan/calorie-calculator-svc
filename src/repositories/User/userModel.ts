import * as mongoose from "mongoose";
import { Schema } from 'mongoose';

export const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    meals: {
        type: Object,
        default: [],
        name: {
            type: String,
        },
        calories: {
            type: Number,
        }
    },
    mealOn: {
        type: String || null ,
        default: null
    }
})


userSchema.index({ email: 1, mealOn: 1 }, { unique: true });

export const userModel = mongoose.model("User", userSchema, "Users", false);
