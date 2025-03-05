const express = require("express")
const app = express()
const mongoose = require("mongoose")
const userroute = require("./route/user")
const todoroute = require("./route/addtodo")
const cors = require("cors")
const { checklogin } = require("./middelweres/auth")
const { applyTimestamps } = require("./models/user")
const cookieParser = require("cookie-parser")
const port = process.env.PORT

async function connect(){
    // await mongoose.connect("mongodb://localhost:27017/tododata")
    await mongoose.connect("mongodb+srv://yashvaghasiya360:O5cuhkcb9Z04iIfe@cluster0.n6jim.mongodb.net/todo")
}
connect()
// app.use(cors())

app.use(cors({
    origin: 'http://localhost:5173', // Your frontend domain (can be adjusted)
    credentials: true, // Allow sending cookies with requests
}));
app.use(cookieParser()  )
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/data" , (req,res)=>{
    return res.json({user:"yash" , age:19})
})
app.use("/" , (req,res)=>{
    return res.send("hello")
})
app.use("/user" , userroute )
app.use("/todo" , checklogin,todoroute )
route.get("/allworks", async (req, res) => {
    try {
      const finddata = await todomodel.find({createdby: new mongoose.Types.ObjectId(req.user.id)}).lean().populate("createdby");
      
      return res.json({ data: finddata });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return res.status(500).json({ msg: 'Error fetching tasks' });
    }
  })

app.listen( port , () => {
    console.log(`Server listening on` )}
)