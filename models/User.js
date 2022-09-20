const mongoose =require("mongoose");
const userSchema =mongoose.Schema({
    userName:{
    type:String,
    required:true,
    },
    age: Number,
    favFood: {
        type: [String],
        default: []
    }
});
module.exports=mongoose.model("user",userSchema);