import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import '../App.css'
import Login from './login'

function LoginPage() {
        const {isAuthenticated}=useAuth0();
    return  !isAuthenticated &&(
        <div className='grid place-items-center h-screen'>
            <div className='py-20 bg-slate-50 h-80 w-2/5 rounded-2xl grid place-items-center'>
                <h1 className='font-bold'>DashBoard</h1>
                <Login/>
                
            </div>
        </div>

    )
}

export default LoginPage