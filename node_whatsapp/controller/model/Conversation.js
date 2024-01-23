import mongoose from "mongoose";

const ConversationSchema = mongoose.Schema({
    members: {
        type: Array
    },
    message:{
        type: String
    }},
    {
        timestamps : true
    }
);


const convesation = mongoose.model('Conversation', ConversationSchema);

export default convesation;