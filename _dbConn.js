// database connection
import mongoose from "mongoose"
import dotenv from 'dotenv'


const dbConn= ( MongoDbURI)=>{
    try {
    mongoose.connect(MongoDbURI,{
        
    })
    console.log("connected ")
} catch (error) {
    console.log(error);
}
}
export default dbConn