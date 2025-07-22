const express = require("express")
const dotenv = require("dotenv").config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 7002

app.listen(PORT , () =>{
    console.log(`server is running on port ${PORT}`);
    
})