import Book from "../model/Book.model.js";

export const getBook = async(req,res)=>{
    try {
        const options = { timeout: 30000 };
        const book= await Book.find({}, null, options);
        // const result = await Book.find({}, null, options);
        res.status(200).json(book)
        
        
    } catch (error) {
        console.log(error);
        res.send(500).json(error)
    }
}