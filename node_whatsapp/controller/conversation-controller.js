
import Conversation from "./model/Conversation.js"

export const addConversation = async (req, res) => {
    try {
        let {senderId, receiverId} = req.body;

        const exists = await Conversation.findOne({members: {$all : [receiverId, senderId]}})
        if(exists)
            return res.status(200).json("Conversation already exists");
        
        const newConvo = new Conversation({
            members: [senderId, receiverId]
        })

        await newConvo.save();
        return res.status(200).json("Conversation saved");

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Someting went wrong"})
    }

}


export const getConversation = async (req, res) => {
    try {
        let {senderId, receiverId} = req.body;

        const data = await Conversation.findOne({members: {$all : [receiverId, senderId]}})
        return res.status(200).json(data);

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Someting went wrong"})
    }

}