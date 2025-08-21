const jwt=require("jsonwebtoken")
const User=require("../models/User")

exports.protect=async (req,res,next)=>{
    let tokens=req.headers.authorization?.split(" ")[1];
     try{
        const decoded=jwt.verify(tokens,process.env.JWT_SECRET)
        req.user= await User.findById(decoded.id).select("-password")
        next();

     }
     catch(err){
        res.status(401).json({message:"Not Authorized,token failed"})

     }
}