const express=require('express')
const mongoose=require('mongoose')
const Blog=require('./Route/Blog')
const AuthRoute =require('./Route/AuthRoute')
const QueryRoute=require('./Route/QueryRoute')
const cors=require('cors')

mongoURI="mongodb+srv://kumaramit21470:BaNo6Sxd3viZNpOb@cluster0.4zudpz7.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURI,{useNewUrlParser:true,useUnifiedTopology:true}
    ).then(()=>console.log("Mongo Connected"));

const app=express();
const port=5000
app.use(express.json());
app.use(cors())


app.listen(port,()=>{
    console.log('App listening on Port 5000')
})

app.use('/blog',Blog)
app.use('/auth',AuthRoute)
app.use('/query',QueryRoute)