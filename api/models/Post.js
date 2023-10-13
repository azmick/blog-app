const mongoose = require("mongoose")

//create user's schema
const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true,
        },
        desc:{
            type:String,
            required:true,
        },
        photo:{
            type:String,
            required:false,
        },
        username:{
            type:String,
            required:true,
        },
        categories:{
            type:Array,
            required:false,
        },
    },
//yapılan güncelleme ve ekleme tarihleri için kullanıyoruz.
{timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema);