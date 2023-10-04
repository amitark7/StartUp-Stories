const express=require('express')
const QueryModel=require('../Model/QueryModel')

const router=express.Router()

router.post('/',async (req,res)=>{
    try {
        const query=new QueryModel(req.body)
        const data=await query.save()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router