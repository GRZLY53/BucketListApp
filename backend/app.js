const express = require ('express');
const app = express();
const PORT = 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require ('multer');

app.use(cors());

//connection to the database that marvin created
app.use(async function (req, res, next) {
    await mongoose.connect(
      "mongodb+srv://marvimarv:voLFoE5hHcQ1XZBg@db-bucketlistbuddies.kyh0mlf.mongodb.net/test"
    );
    next();
});


//create a disk storage for all the uploads
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'uploads')
    },
    filename: function(req,file,cb) {
        cb(null,`${file.originalname}-${Date.now()}`)
    }
})

//all the different routes for the database are below here

//this is a route for the standard backend to see if we can reach it
app.get("/", (req,res) => {
    res.send("hallo welt")
})

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})
