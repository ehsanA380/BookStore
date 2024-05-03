import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import db from './_dbConn.js'



const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const port = process.env.PORT || 4000
const MongoDbURI = process.env.MongoDbURI
// db conneton


  db(MongoDbURI);

// defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)

console.log(process.env.PORT);

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})