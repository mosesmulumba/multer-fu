import { upload } from "./upload";
import express  from "express";
// const express = require('express');
const app = express();
const port = 3030

// const upload = require('./upload');

app.post('/upload' , upload.single('file'), (req, res)=>{
    return res.json({message: "The file was successfully uploaded"});
});

app.listen(port, ()=>{
    console.clear();
    console.log(`App listeinig to port ${port}`);
})