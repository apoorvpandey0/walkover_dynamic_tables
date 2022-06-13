import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Logout from './logout';
function Home() {
    const {user}=useAuth0();
  return (
    <div>
        <h1> Home page</h1>
        <Logout/>
        {console.log(user)}
    </div>
    
  )
}

export default Home