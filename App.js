const express=require('express');
const port=5000;
const {getAllusers,addUser,getOneUser,createOneUser,createPersons,editFavoriteFood,updateUser,deleteUser}=require('./Controllers/UserController');
const connectDB=require('./config/connectDB');
const app=express();
app.listen((port),(e)=>{
    e?console.log('serveur is failed '):console.log(`server is running on port ${port}`);
});
const userone={userName:"racha",age:22,FavFood:["mlawi","salade"]};
connectDB();
createPersons();
createOneUser();
getAllusers();
addUser(userone);
getOneUser('');
editFavoriteFood("6329b84e4db2ec73a7b09bf6", "poisson")
    .then((newFavFood) => {console.log(newFavFood);})
    .catch((error) => { console.error(error);});
updateUser('nom').then((rs) => {console.log(rs)}).catch((error) => {
console.log(error)})
deleteUser("6329b8b2064dce45a4507b07").then((rs) => {console.log(rs)
}).catch((error) => {console.log(error)});

