import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Logout() {
    const { logout, isAuthenticated } = useAuth0();
    return (isAuthenticated &&
        <div>
            <button className='rounded-xl bg-blue-400 px-5 py-3' onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default Logout