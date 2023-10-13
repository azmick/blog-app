import "./register.css"
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'

function Register() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassWord] = useState("")
  const [error,setError] = useState(false)

  const handleSubmit = async (e) => {
    //Kayıt ol butonuna tıkladığımızda sayfanın yenilenmemesi için kullandık
    e.preventDefault()
    setError(false)
    try{
    const res = await axios.post("/auth/register", {
      username,
      email,
      password,
    })
    res.data && window.location.replace("/login")
    } catch(err){
      setError(true)
    }
  }

  return (
    <div className="register">
        <pan className="registerTitle">Kayıt Ol</pan>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Kullanıcı Adı</label>
            <input 
            type="text" 
            className="registerInput" 
            placeholder="Kullanıcı adınızı giriniz..."
            onChange={e=>setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
            type="text" 
            className="registerInput" 
            placeholder="Emailinizi giriniz..." 
            onChange={e=>setEmail(e.target.value)}
            />
            <label>Şifre</label>
            <input 
            type="password" 
            className="registerInput"
            placeholder="Şifrenizi giriniz..."
            onChange={e=>setPassWord(e.target.value)}
            />
            <button className="registerButton">Kayıt Ol</button>
        </form>
        <button className="registerLoginButton" type="submit">
        <Link className="link" to="/login">Giriş Yap</Link>
        </button>
    {error && <span style={{color:"red", marginTop:"10px"}}>Bir şeyler yanlış gidiyor.</span>}
    </div>
  )
}

export default Register