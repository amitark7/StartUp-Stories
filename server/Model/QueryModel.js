const mongoose=require('mongoose')

const QuerySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    subject:{
        type: String,
        required: true
    },
    message:{
        type:String,
        required:true
    }
})

const QueryModel=mongoose.model('query',QuerySchema)
module.exports=QueryModel