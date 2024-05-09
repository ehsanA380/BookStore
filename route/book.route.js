import express from "express";
import { addBook, getBook, getBookById, updateBook } from "../controller/book.controller.js";

const router = express.Router()

router.get("/",getBook);
router.post("/addBook",addBook);
router.put('/update/:id',updateBook);
router.get('/getBook/:id',getBookById)

export default router