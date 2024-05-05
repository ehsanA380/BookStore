import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import db from './_dbConn.js'



const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const port = 4001
// const MongoDbURI = process.env.MongoDbURI
// const MongoDbURI = 'mongodb+srv://renderAuth:HzKWNRPaVhNQytB0@ehasanbookstore.ruvlnou.mongodb.net/?retryWrites=true&w=majority&appName=EhasanBookStore';
const MongoDbURI = 'mongodb://127.0.0.1:27017/bookStore';
// db conneton


  db(MongoDbURI);

// defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)

// console.log(process.env.PORT);

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})