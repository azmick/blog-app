import './settings.css'
import SideBar from '../../sidebar/Sidebar'
import { useContext,useState } from 'react'
import { Context } from '../../../context/Context'
import axios from 'axios'

export default function Settings() {
    const {user,dispatch} = useContext(Context)
    const PF = "http://localhost:5000/images/"
  const [file,setFile] = useState(null)
  const [username,setUsername] = useState(null)
  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)
  const [success,setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type:"UPDATE_START"})
    const updatedUser = {
      userId:user._id,
      username,
      email,
      password,
    }
    if(file){
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name",filename)
      data.append("file",file)
      updatedUser.profilePic = filename
      try{
        await axios.post("/upload",data)
      }catch(err){
        console.log("veri yüklenme reddedildi.")
      }
    }
    try{
        const res = await axios.put("/users/"+user._id,updatedUser)
        setSuccess(true)
        dispatch({type:"UPDATE_SUCCESS", payload:res.data})
    }catch(err){
        dispatch({type:"UPDATE_FAILURE"})
    }
  }
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className='settingsUpdateTitle'>Hesabını Güncelle</span>
                <span className='settingsDeleteTitle'>Hesabını Sil</span>
            </div>
            <form className='settingsForm' onSubmit={handleSubmit}>
                <label >Profil Fotoğrafı</label>
                <div className="settingsPP">
                    <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:'none'}} onChange={(e)=>{setFile(e.target.files[0])}}/>
                </div>
                <label>Kullanıcı Adı</label>
                <input type="text" placeholder={user.username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <label>Email</label>
                <input type="email" placeholder={user.email} onChange={(e)=>{setEmail(e.target.value)}}/> 
                <label>Şifre</label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} />
                <button className="settingsSubmit" type="submit">Güncelle</button>
                {success && <span style={{color:"green", textAlign:"center",marginTop:"20px"}}>Profile has been updated...</span>}
            </form>
        </div>
        <SideBar/>
    </div>
  )
}
