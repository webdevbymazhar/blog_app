import React, { useEffect } from 'react'
import { useAuth } from '../../../../context/Auth'
import { useNavigate } from 'react-router-dom'

const AuthorLayout = ({children}) => {

    let [auth] = useAuth()
    let router = useNavigate()


   useEffect(()=>{
        if(!auth.token){
            alert("token not specified")
            router("/")
        }
   },[auth.token,router])


   
  return (
    
    <div>
        <nav>Author's Dashboard</nav>
      {children}
    </div>
  )
}

export default AuthorLayout
