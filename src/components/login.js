import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function Login() {
    const {loginWithRedirect,isAuthenticated}=useAuth0();
  return !isAuthenticated &&(
    <div>
        <button className='rounded-xl bg-blue-500 px-5 py-3' onClick={()=>loginWithRedirect()}>Login</button>
    </div>
     
  )
}

export default Login