import {useState,useEffect} from 'react'
import Header from "../../header/Header"
import Sidebar from "../../sidebar/Sidebar"
import Posts from "../../posts/Posts"
import "./home.css"
import axios from "axios"
import { useLocation } from 'react-router-dom'

function Home() {
  const [posts,setPosts] = useState([])
  const {search} = useLocation()
  
  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])

  return (
    <>
    <Header/>
    {/*bizim containerimiz olacak*/}
    <div className="home">
    <Posts posts={posts}/>
    <Sidebar/>
    </div> 
    </>
  )
}

export default Home