import express from "express";
import { addBook, getBook, updateBook } from "../controller/book.controller.js";

const router = express.Router()

router.get("/",getBook);
router.post("/addBook",addBook);
router.put('/update/:id',updateBook);

export default router