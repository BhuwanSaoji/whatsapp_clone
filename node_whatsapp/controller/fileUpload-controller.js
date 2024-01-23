
import grid from "gridfs-stream";
import mongoose from "mongoose";

const conn = mongoose.connection;
let gfs,gridfsBucket;
conn.once('open', ()=>{
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    })

    gfs= grid(conn.db, mongoose.mongo);
    gfs.collection('fs')
})

const url = 'http://localhost:8000'
export const uploadFile = async (req, res) => {
    try {
       if(!req.file) return res.status(404).json("File not found");
    
       const imageUrl = `${url}/file/${req.file.filename}`
        
       return res.status(200).json(imageUrl);


    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Someting went wrong"})
    }

}

export const getImage = async (req, res) => {
    try {
        console.log(req.params.fileName, "sjd")
       const file = await gfs.files.findOne({filename: req.params.fileName });
       
       const readStream = gridfsBucket.openDownloadStream(file._id);
       readStream.pipe(res)
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: "Someting went wrong"})
    }

}
