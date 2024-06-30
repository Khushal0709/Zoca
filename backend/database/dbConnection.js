import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"restaurant",
    }).then(()=>{
        console.log("Successfully connected to database.")
    }).catch((err)=>{
        console.log(`some erroe has occured: ${err}`);
    });

};