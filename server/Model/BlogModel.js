const mongoose=require('mongoose')

const BlogSchema=mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },
        desc:{
            type: String,
            required: true
        }
    }
);

const BlogModel=mongoose.model('Blog',BlogSchema)
module.exports=BlogModel