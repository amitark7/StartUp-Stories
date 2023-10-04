const express=require('express')
const BlogModel=require('../Model/BlogModel')

const router=express.Router();

router.post('/createblog',async (req,res)=>{
    const blog=new BlogModel(req.body)
    try {
        const data=await blog.save()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/',async (req,res)=>{
    try {
        const blog=await BlogModel.find()
        res.status(200).json(blog)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router;