import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Logout from './logout';
function Home() {
    const { user } = useAuth0();
    return (
        <div className=''>
            <nav class="bg-purple-800 text-white justify-between flex">
                <h1 class="mx-3 my-auto font-bold">My Collections</h1>
                <ul class="flex  justify-end space-x-10 my-4 px-28">
                    <Logout />
                </ul>
            </nav>
            
            {console.log(user)}
        </div>

    )
}

export default Home