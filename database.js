const mongoose = require('mongoose');

const dotenv        = require('dotenv');
dotenv.config(); // load env variables

// const databaseName = "company";
// const databaseName = process.env.DATABASE_NAME;

// MongoDB Atlas connection URL
// const url = 'mongodb+srv://arjun:Gm2qZA6WziDC9iIt@cluster0.yjx1zqi.mongodb.net/'+databaseName;
// const url = process.env.DB_URL+process.env.DATABASE_NAME;
// console.log(process.env.DB_URL);


// Database connect
// mongoose.connect(url);



// // Database connection reference object
// const db = mongoose.connection;

// db.on("connected",()=>{
//   console.log('Database connected.');
// })

// db.on("error",(err)=>{
//   console.error('Database connection error.',err);
// })

// db.on("disconnected",(err)=>{
//   console.log('Database disconnected.');
// })


// // Export db connection
// module.exports = db;


const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL+process.env.DATABASE_NAME )
    .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
    .catch((err) => {
      throw err;
    });
};


module.exports = connectDB;