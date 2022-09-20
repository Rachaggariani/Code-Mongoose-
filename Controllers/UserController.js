const User=require('../models/User')
const getAllusers=async()=>{
    try{
const users=await User.find();
if(users.length===0){
    console.log('your database is empty');
}
else{
    console.log(users);
}
    }catch(error){
console.log('get all users is failed')
    }
};

const addUser=async(userInfo)=>{
    try{
const users=await User.find()
const searchedUser=users.find((el)=>el.email===userInfo.email)
if(searchedUser){
    console.log('user is already exist')
}else{
    const newUser=new User({
        userName:userInfo.userName,
        age:userInfo.age,
        favFood:userInfo.favFood
    })
    await newUser.save()
}
    }catch(error){

    }
}
const getOneUser=async(id)=>{
    try{const users=await User.find();
const searchedUser=await User.findById(id);

console.log("user is found", searchedUser);
    }catch(error){
        console.log('get one user is failed! ');
    }
}
const createOneUser = () => {
    let nom = new User({ userName: 'Farah', age: 18, favFood: ['pizza', 'mlawi'] })
    nom.save((e) => {
    if (e) {console.log('failed to create ');}
    else {console.log('added one User');}
 })}
let Persons = [
        { userName: 'Karim', age: 40,favFood: ['Salade', 'sandwitch'] },
        { userName: 'meniar', age: 25, favFood: ['poisson ','fruit'] },
        { userName: 'nour', age: 10, favFood: ['couscouss', 'sandwitch'] }
    ]
    
    const createPersons = async () => {
        try {const pers = await User.create(Persons);
            console.log(pers);
        } catch (error) {
            console.error(' error in created Persons ');
        }
    }
const editFavoriteFood  = async (id, newFavFood) => {
        return new Promise(async (resolve, reject) => {
            try {
                const persFavFood = await User.findById(id);
                persFavFood.favFood.push(newFavFood);
                const newpersFavFood = await persFavFood.save();
                resolve(newpersFavFood);
            }catch (error) {reject(error);}
        });
    }
const updateUser = async (newName) => {
    return new Promise((resolve, reject) => {
        User.findOneAndUpdate({ userName: newName }, { age: 20 }, { new: true }, (err, doc) => {
            if (err) {reject(err);}
            else{
                resolve(doc);
            }
           
        })
    })
}
const deleteUser=async(id)=>{
    return new Promise((resolve, reject) => {
        User.findByIdAndRemove(id, (err, data) => {
            if (err) {
                reject(err)
            }else{
                resolve(data)
            }
           
        })
    })
}
module.exports={getAllusers,addUser,getOneUser,createOneUser,createPersons,editFavoriteFood,updateUser,deleteUser}
