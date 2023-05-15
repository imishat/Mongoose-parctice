import { NextFunction, Request, Response } from "express";
import createUserTodb from "../user.service";

  export const createuser= async ( req: Request, res: Response,next:NextFunction ) => {
   const user=await createUserTodb()
   res.status(200).json({
    status:"success",
    data:user
   })

 
  
  
  




  


}
// route call controlar and service