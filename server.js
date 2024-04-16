const express       = require('express');
const app           = express();
const connectDB     = require('./database');
const bodyParser    = require('body-parser');
const dotenv        = require('dotenv');
dotenv.config(); // load env variables
app.use(bodyParser.json()); // post request body

// Connect database
connectDB();


// Get user routes
const userRoutes = require('./routes/userRoutes');

app.use('/user',userRoutes);


// Home page
app.get('/',function(req,res){
    res.send("Welcome to the Company Landing Page...")
});

const PORT = process.env.PORT || 3000;
// console.log(PORT)
app.listen(PORT,() => {
    console.log(`Server started on http://localhost:${PORT}`);
  });