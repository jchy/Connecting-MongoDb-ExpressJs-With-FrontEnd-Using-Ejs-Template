const express=require("express");
const app =express();
const cors= require('cors');
const connect = require('./app/config/db');
const userRoute = require("./app/routes/user.route");

const PORT=5002;
app.set("view engine", "ejs")

// * for CSS
// app.use(express.static("public"))

//cors
app.use(cors());
app.use(express.json())

app.use("/users",userRoute);
// app.use("/users", userController);

app.get("/",(req,res,next)=>{
    res.render("index",{title: "Jaswant Chaudhary"})
})

const start= async ()=>{
    await connect();
    app.listen(PORT,()=>{
        console.log(`app is listening on port ${PORT}`);
    })
}

module.exports=start;