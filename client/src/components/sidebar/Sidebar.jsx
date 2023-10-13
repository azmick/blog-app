import { useEffect, useState } from 'react'
import './sidebar.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Sidebar() {
    const [cats,setCats] = useState([])
    useEffect(()=>{
        const getCats = async () => 
        {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    },[])
return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>HAKKIMDA</span>
            <img src="https://picsum.photos/id/1062/200/200" alt="" />
            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Provident reprehenderit repellendus et repudiandae eos id minus numquam quisquam facilis
            </p>
        </div>

        <div className='sidebarItem'>
        <span className='sidebarTitle'>KONULAR</span>
        <ul className="sidebarList">
            {cats.map(c=>(
            <Link to= {`/?cat=${c.name}`} className="link">
            <li className='sidebarListItem'>{c.name}</li>
            </Link>
            ))}
        </ul>
        </div>

        <div className='sidebarItem'>
        <span className='sidebarTitle'>İLETİŞİM</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-linkedin"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
        </div>
        </div>
    </div>
)
}

export default Sidebar