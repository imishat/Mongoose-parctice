   import { user } from "./user/user.models";
   import { IUser } from './user/user.interfacr';

   const createUserTodb=async()=>{
    // create model for insert user

const User= await new user({
  name:"mishat islam",
  email:"mojahid islam mishat@gmail.com",
  avatar:'https://i.imgur.com/dM7Thhn.png'
})
await User.save();
return User
console.log(User)


}
//find many 
 export const getUser=async()=>{
  const getusers=await user.find();
  return getusers
}

//fine one 

 export const oneuser=async(payload:string):Promise<IUser |null>=>{
  const one=await user .findOne({id:payload})
  return one


}
export default createUserTodb;