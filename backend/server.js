const express = require("express");
const  cors = require("cors");

const PORT = 5555;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res) =>{
    res.send("Hello to home page");
})

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`);
})

