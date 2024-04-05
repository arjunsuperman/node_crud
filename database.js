const mongoose = require('mongoose');

const databaseName = "company";

// MongoDB Atlas connection URL
// const url = 'mongodb+srv://arjun:Gm2qZA6WziDC9iIt@cluster0.yjx1zqi.mongodb.net/'+databaseName;
const url = 'mongodb+srv://arjun:Gm2qZA6WziDC9iIt@cluster0.yjx1zqi.mongodb.net/'+databaseName;

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
    .connect("mongodb+srv://arjun:Gm2qZA6WziDC9iIt@cluster0.yjx1zqi.mongodb.net/", { dbName: "company" })
    .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
    .catch((err) => {
      throw err;
    });
};


module.exports = connectDB;