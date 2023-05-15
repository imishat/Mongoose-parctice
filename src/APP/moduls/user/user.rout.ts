import express  from "express";
import { createuser } from "./user.controler";
const router=express.Router()
router.get('/', createuser)