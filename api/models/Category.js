const mongoose = require("mongoose")

//create user's schema
const CategorySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
            
        }
    },
//yapılan güncelleme ve ekleme tarihleri için kullanıyoruz.
{timestamps: true}
);

module.exports = mongoose.model("Category", CategorySchema);