import mongoose from "mongoose";

const MessageSchema = mongoose.Schema({
    conversationId: String,
    receiverId: String,
    senderId: String,
    text: String,
    type: String
}, {
    timestamps: true
})

const message = mongoose.model("message",MessageSchema);
export default message