const express = require ('express');
const app = express();
const PORT = 3001;
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require ('multer');
app.use(express.static("uploads"));


app.use(cors());

//connection to the database that marvin created
app.use(async function (req, res, next) {
    await mongoose.connect(
      "mongodb+srv://marvimarv:voLFoE5hHcQ1XZBg@db-bucketlistbuddies.kyh0mlf.mongodb.net/test"
    );
    next();
});

const upload = multer({ storage });

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

//this is a route for uploading a single image

app.post("/upload", upload.single("image"), (req, res) => {
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    // req.file contains information about the uploaded file
    res.send("Image-File uploaded successfully");
  });
  
  
