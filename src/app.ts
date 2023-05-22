import  express, { Application } from "express";

import cors from 'cors';





const app:Application = express()

app.use(cors())
// data perse
app.use(express.json())
app.use(express.urlencoded({extended:true}))

import userRouter from './APP/moduls/user/user.rout'
app.use('/api/user/v1',userRouter)
 //inserting test data in mongodb

  /*
  data insert using ts step 
  step 1:create interfaces
  step2:create Schema
  step3:create Model
  step 4: data-base Query 

  */
  // res.send('Hello World!');
  // next()

  // Crating interface



export default app