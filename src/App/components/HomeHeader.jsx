import React from 'react'
import Image from "../../assets/5396346.jpg"
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <div className='d-flex justify-content-between' >
        <div  style={{marginTop:"100px",marginLeft:"80px"}}>
        <h1>Welcome To <span style={{fontWeight:"bold",color:"#4c96ff"}}>BLOG IT UP </span>!</h1>
        <p style={{fontSize:"20px",paddingLeft:"5px",paddingTop:"5px"}}>Your gateway to a world of ideas, insights, and imagination.</p>
        <button className='btn btn-primary' style={{fontSize:"15px",marginLeft:"5px",marginTop:"5px",padding:"8px 15px"}}><Link style={{textDecoration:"none",color:"white"}} to={"/create-blog"}>Create Blog</Link></button>
        </div>
      
      <img style={{width:"500px",height:"auto"}} src={Image} alt="" />
    </div>
  )
}

export default HomeHeader
