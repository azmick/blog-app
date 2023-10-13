const mongoose = require("mongoose")

//create user's schema
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    //Şifre MongoDB içinde gizli değil. MongoDB'de de gizli olması gerekiyor.
    //Bunun için ayrı bir kütüphane indiriyioruz komut -> yarn add bcrypt
    password:{
        type:String,
        required: true,
    },
    profilePic:{
        type:String,
        default:"",
    },
},
//yapılan güncelleme ve ekleme tarihleri için kullanıyoruz.
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);