import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      Welcome To BlogItUp !
      <button><Link to={"/create-blog"}>Create Blog</Link></button>
    </div>
  )
}

export default Home
