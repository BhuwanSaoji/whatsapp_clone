import express from "express";
import { addUser, getUsers } from "./controller/user-controller.js";
import { addConversation, getConversation } from "./controller/conversation-controller.js";
import { newMessage, getMessage } from "./controller/message-controller.js";
import { uploadFile,getImage } from "./controller/fileUpload-controller.js";
import upload from "./utils/upload.js";
const route = express.Router();


route.post('/add', addUser);
route.get('/users', getUsers);

route.post('/conversation/add', addConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);

route.post('/file/upload', upload.single("file"), uploadFile);
route.get('/file/:fileName', getImage);



export default route;