import Book from "../model/Book.model.js";

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