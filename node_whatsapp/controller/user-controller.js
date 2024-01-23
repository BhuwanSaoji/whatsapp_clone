
import {user} from "./model/User.js"

export const addUser = async (req, res) => {
    try {
        let users = await user.findOne({sub: req.body.sub});

        if(users){
           return res.status(200).json({message: "User already exists"})
        }

        let newUser = new user(req.body);
        await newUser.save();

        return res.status(200).json(newUser);

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Someting went wrong"})
    }

}


export const getUsers = async (req, res) => {
    try {
        let users = await user.find();
        return res.status(200).json(users);

    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Someting went wrong"})
    }

}