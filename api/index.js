const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
//route implementasyonu bunun sayesinde register sayfasına postmandan ulaşabiliyoruz.
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require("multer")

dotenv.config()
//api'den json dosyası verisi alışverişi için
app.use(express.json())


mongoose.connect(process.env.MONGO_URL, 
{   useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(() => {
    console.log("Connected to MONGODB")
}).catch(err => {
    console.error("Error connecting to MongoDB:", err)
})

    const storage =  multer.diskStorage({
        destination:(req,file,cb) => {
            cb(null,"images")
        },filename:(req,file,cb) => {
            cb(null, "req.body.name")
        }
    })

    const upload = multer({storage:storage})
    app.post("/api/upload", upload.single("file"),(req,res)=>{
        res.status(200).json("Dosya yüklendi.")
    })

    app.use("/api/auth", authRoute)
    app.use("/api/users", userRoute)
    app.use("/api/posts", postRoute)
    app.use("/api/categories",categoryRoute)

app.listen(5000, () => {
    console.log("backend is running")
})
