import { Schema, model } from "mongoose";
import { IUser } from "./user.interfacr";

// creting schema using interface
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
  });
  
      // create model for insert user
    export const user =model<IUser>("user",userSchema)