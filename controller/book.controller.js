import Book from "../model/Book.model.js";
// api logic for getBook
export const getBook = async (req, res) => {
    try {
        const options = { timeout: 30000 };
        const book = await Book.find({}, null, options);
        // const result = await Book.find({}, null, options);
        res.status(200).json(book)


    } catch (error) {
        console.log(error);
        res.send(500).json(error)
    }
}
//  api login for addBook
export const addBook = async (req, res) => {
    const { name, price, category, title, image } = req.body;
    try {
        // const options = {timeout:30000};
        const addBook = new Book({
            name,
            price,
            category,
            title,
            image
        })
        await addBook.save();
        res.status(200).json({
            message: "User Created Succefully", book: {
                _id: addBook._id
            }
        })
    } catch (error) {
        console.log(error);
        res.send(500).json(error)
    }
}
// api logic for updateBook
export const updateBook = async (req, res) => {

    const id = req.params.id;
    const { name, price, category, title, image } = req.body;

    const filter = { _id: id };
    const update = {
        name: name,
        price: price,
        category: category,
        title: title,
        image: image
    };
    try {
        const book = await Book.findOne(filter);
        book.name=update.name;
        book.price=update.price;
        book.category=update.category;
        book.title=update.title;
        book.image=update.image;
        const updateBook= await book.save();
        res.status(200).json(updateBook);
        
        
    }
    catch (err) {
        res.json(err)
        res.status(500)
    }

} 

// api for get book by id
export const getBookById = async (req,res)=>{
    const id = req.params.id;
    if (id==null ||id==undefined ||id=='') {
        res.status(500).json({message:"id is null"})
    }
    try{
        const book= await Book.findOne({_id:id})
        res.status(200).json(book)
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}