// database connection
import mongoose from "mongoose"
import dotenv from 'dotenv'


const db= (MongoDbURI )=>{
    try {
    mongoose.connect(MongoDbURI,{
        
    })
    console.log("db connected ")
} catch (error) {
    console.log(error);
}
}

export default db;

