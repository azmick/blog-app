import { useContext, useState } from "react"
import "./write.css"
import axios from 'axios'
import { Context } from "react"


function Write() {
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [file,setFile] = useState(null)
  const {user} = useContext(useContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPost = {
      username: user.username,
      title,
      desc,
    }
    axios.post("/posts")
  }
  return (
    <div className="write">
        <img className="writeImg" src="https://picsum.photos/id/163/1000/500"></img>
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                {/* Ekleme işlemini yapıcak butonu görselleştiriyoruz */}
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-add"></i>
                </label>
                {/*Resim eklediğimiz input */}
                <input type="file" id="fileInput" style={{display:"none"}} />  
                {/*Yazacağın bloğun başlığı*/}
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/> 
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Anlat bakalım hatican..." type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit" type="submit">Yayınla</button>
        </form>
    </div>
  )
}

export default Write