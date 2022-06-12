import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
function Home() {
    const {logout,isAuthenticated}=useAuth0();
    const {user}=useAuth0();
  return isAuthenticated && (
    <div>
        <h1> Home page</h1>
        <button onClick={()=>logout()}>Logout </button>
        {console.log(user)}
    </div>
    
  )
}

export default Home