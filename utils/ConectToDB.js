import mongoose from "mongoose";

export default async function conectToDB(){

    if(mongoose.connections[0].readyState) return;

     await mongoose.connect(process.env.MONGO_URI)
     .then(() => console.log("connected To DB"))
     .catch(err => console.log(err))
}