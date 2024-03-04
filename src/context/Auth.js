import React, { createContext, useContext, useState } from 'react'

let AuthContext = createContext()
const AuthProvider = ({children}) => {

    let [auth,setAuth] = useState(
        {
            user: null,
            token: "This is a token"
        }
    )
    
  return (
    <div>
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
