const express = require("express")
const app = express()
const dotenv= require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const postRoute = require("./routes/post")

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.use("/post",postRoute)

app.listen(process.env.PORT || 3000 ,()=>{
    console.log("server is running...")
})