import express from "express"
import { addSubsciber } from "../controller/newsLetter.controller.js"

const router= express.Router();

router.post('/user',addSubsciber);

export default router