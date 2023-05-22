import { NextFunction, Request, Response } from "express";
import createUserTodb, { getUser, oneuser } from "../user.service";

  export const createuser= async ( req: Request, res: Response,next:NextFunction ) => {
   const user=await createUserTodb()
   res.status(200).json({
    status:"success",
    data:user
   })

 
  
  
  




  


}

 export const getUsers =async(req:Request,res:Response,next:NextFunction)=>{
const getuser=await getUser()
res.status(200).json({
  status:"get user success",
  data:getuser

})


}
//find one funtion
export  const findoneUser=async(req:Request,res:Response,next:NextFunction)=>{
  const {id}=req.params
  const useroone=await oneuser(id)
  res.status(200).json({

  })
}



// route call controlar and service