const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017"
const connectDB=async()=>{
    try{
        await mongoose.connect(url);
        console.log("db is sucessfully connected");
    }catch(error){
        console.log('connection to db is failed ');
    }
}
module.exports=connectDB ;