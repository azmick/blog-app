import { useContext, useRef } from "react";
import "./login.css"
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import { Context } from "../../../context/Context";
import axios from 'axios'

function Login() {

  const userRef = useRef()
  const passwordRef = useRef()
  const {dispatch,isFetching} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try{
        const res = await axios.post("/auth/login",{
          username: userRef.current.value,
          password: passwordRef.current.value,
        })
    dispatch({type:"LOGIN_SUCCESS",payload:res.data})
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"})
    }
  }


  return (
    <div className="login">
        <pan className="loginTitle">Giriş Yap</pan>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>Kullanıcı adı</label>
            <input type="text" className="loginInput" placeholder="Kullanıcı adınızı giriniz..." ref={userRef}/>
            <label>Şifre</label>
            <input type="password" className="loginInput" placeholder="Şifrenizi giriniz..." ref={passwordRef}/>
            <button className="loginButton" type="submit" disabled={isFetching} >Giriş Yap</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Kayıt Ol</Link>
        </button>
    </div>
  )
}

export default Login