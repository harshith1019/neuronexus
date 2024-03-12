import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect('mongodb+srv://harshith1019:admin123@quiz.e8mrjjc.mongodb.net/?retryWrites=true&w=majority&appName=Quiz')
    console.log("Database Connected")
}