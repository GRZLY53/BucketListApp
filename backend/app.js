const express = require ('express');
const app = express();
const PORT = 3001;


app.get("/", (req,res) => {
    res.send("hallo welt")
})

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`)
})
