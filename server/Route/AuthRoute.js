const express=require('express')
const UserModel=require('../Model/UserModel')

const router=express.Router()


router.post('/register',async (req,res)=>{
    try {
        const success=false
        const users=new UserModel(req.body)
        const data=await users.save()
        res.status(200).json(data)   
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/login',async (req,res)=>{
    try {
        let success=false
        const{email,password}=req.body
        let user = await UserModel.findOne({ email });
        if(user.email!==email || user.password!==password){
            return res.status(404).json("Invallid Creandential")
        }
        const data={
            id:user._id
        }
        success=true
        res.status(200).json({data,success})
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router;