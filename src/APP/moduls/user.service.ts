   import { user } from "./user/user.models";
   
   const createUserTodb=async()=>{
    // create model for insert user

const User= await new user({
  name:"mishat",
  email:"mojahid islam mishat@gmail.com",
  avatar:'https://i.imgur.com/dM7Thhn.png'
})
await User.save();
console.log(User)


}
export default createUserTodb;