import "./topbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

function TopBar() {
  const {user} = useContext(Context)
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
                <li className="topListItem">
                  {user && "ÇIKIŞ YAP"}
                </li>
            </ul>
        </div>
        <div className="topRight">
          {user ? (<img className="topImg" src="https://picsum.photos/id/17/200/300" alt="" />) : (

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