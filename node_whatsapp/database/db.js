import mongoose from 'mongoose';

export const Connection = async() =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/whatsapp');
        console.log("Connected to mongo db")
    } catch (error) {
        console.error(error)
    }
}