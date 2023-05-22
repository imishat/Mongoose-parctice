import express  from "express";
import { createuser, findoneUser, getUsers } from "./user.controler";
import e from "express";
const router=express.Router()
router.get('/', getUsers);
router.post('/createuser', createuser);

router.get('/:id',findoneUser)
export default router