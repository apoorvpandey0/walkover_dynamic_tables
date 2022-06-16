import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Logout from './logout';
import { DataTable } from '../table.jsx'

import AddTable from "../modal.jsx";

function Home() {
    const { user } = useAuth0();
    const [tables, setTables] = React.useState([]);
    function handleAddNewTable(name, fields) {
        setTables([...tables, { id: tables.length, name: name, fields: fields, rows: [] }]);
    }

    function updateTable(id, table) {
        setTables(tables.map(t => t.id === id ? table : t));
    }
    return (
        <div className=''>
            <nav class="bg-purple-800 text-white justify-between flex">
                <h1 class="mx-3 my-auto font-bold">My Collections</h1>
                <ul class="flex  justify-end space-x-10 my-4 px-28">
                    <Logout />
                </ul>
            </nav>
            <div className='grid place-items-center h-20'>
                <AddTable addNewTable={handleAddNewTable} />
            </div>

            {tables.map(table => <DataTable table={table} updateTable={updateTable} />)}
            {console.log(user)}
        </div>
    )
}

export default Home