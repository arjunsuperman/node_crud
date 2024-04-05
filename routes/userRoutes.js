const express   = require('express');
const router    = express.Router();
const userModel = require('../models/user_model');


// Post method to add new user
router.post('/addUser',async (req,res)=>{
    try{
        const userData = req.body; // getting the request data by body parser.

        // Create new user document (row) as per model parameters
        const newUser = new userModel(userData);

        // Save new user to collection.
        const response = await newUser.save();
        res.status(200).json({status:true,msg:"User Created Successfully"});
    }catch(err){
        res.status(500).json({status:false,msg:"Internal Server Error",log:err});
    }
});


// Get User details
router.get('/getUser',async (req,res)=>{
    try{
        var query = require('url').parse(req.url,true).query;  // Get url query parameters
        if(query.email && query.email != ""){
            const users = await userModel.find({email:query.email}); 
            res.status(200).json({status:true,data:users});
        }else{
            const users = await userModel.find();
            res.status(200).json({status:true,data:users});
        }
    }catch(err){
        res.status(500).json({status:false,msg:"Internal Server Error",log:err});
    }
})


// Update user put request
router.put('/updateUser',async(req,res)=>{
    try{
        var query = require('url').parse(req.url,true).query;
        if(query.email && query.email != ""){
            const {userData} = req.body; // getting the request data by body parser.
            
            const users = await userModel.updateOne({email:query.email},userData); 
            res.status(200).json({status:true,data:users});
        }else{
            res.status(500).json({status:false,msg:"Internal Server Error",log:'Please add param email id'});
        }
    }catch(err){
        res.status(500).json({status:false,msg:"Internal Server Error",log:err});
    }
})

router.delete('/deleteUser/:id',async(req,res)=>{
    try{
        // const userId = parseInt(req.params.id);
        const userId = req.params.id;
        const user = await userModel.deleteOne({'_id':userId})
        res.status(200).json({status:true,data:user});
    }catch(err){
        res.status(500).json({status:false,msg:"Internal Server Error",log:err});
    }
})

module.exports = router;