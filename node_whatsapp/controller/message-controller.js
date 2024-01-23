import convesation from "./model/Conversation.js";
import Message from "./model/Message.js"

export const newMessage = async (req, res) => {
    try {
        let data = req.body;
        const newMessage = new Message(data);
        await newMessage.save();

        await convesation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text} )
        return res.status(200).json("message saved");

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Someting went wrong"})
    }

}


export const getMessage = async (req, res) => {
    try {
        const newMessage = await Message.find({conversationId: req.params.id});
        return res.status(200).json(newMessage);

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Someting went wrong"})
    }

}

