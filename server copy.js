const express       = require('express');
const app           = express();
const db            = require('./database');
const userModel     = require('./models/user_model');
const bodyParser    = require('body-parser');

app.use(bodyParser.json()); // post request body


// Get method to get all users
app.get('/',function(req,res){
    res.send("Welcome to the Company Landing Page...")
});



// Post method to add new user
app.post('/addUser',async (req,res)=>{
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
app.get('/getUser',async (req,res)=>{
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
app.put('/updateUser',async(req,res)=>{
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

app.delete('/deleteUser/:id',async(req,res)=>{
    try{
        // const userId = parseInt(req.params.id);
        const userId = req.params.id;
        const user = await userModel.deleteOne({'_id':userId})
        res.status(200).json({status:true,data:user});
    }catch(err){
        res.status(500).json({status:false,msg:"Internal Server Error",log:err});
    }
})

const PORT = 3025;
app.listen(PORT,() => {
    console.log(`Server started on http://localhost:${PORT}`);
  });