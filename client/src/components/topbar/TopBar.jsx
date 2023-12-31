import "./topbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

function TopBar() {
  const PF = "http://localhost:5000/images/"
  const {user,dispatch} = useContext(Context)
  
  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }

  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-x-twitter"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/">ANA SAYFA</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/">HAKKIMDA</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/">İLETİŞİM</Link>
                </li>
                <li className="topListItem">
                <Link className="link" to="/write">YAZ</Link>
                </li>
                <li className="topListItem" onClick={handleLogout}>
                  {user && "ÇIKIŞ YAP"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {user ? (
          <Link to="/settings">
          <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
          ) : (
          <ul className="topList">
          <li className="topListItem">
          <Link className="link" to="/login">GİRİŞ YAP</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/register">ÜYE OL</Link>
          </li>
          </ul>

          ) }

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar