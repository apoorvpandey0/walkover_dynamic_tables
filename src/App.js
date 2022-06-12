import { useAuth0 } from "@auth0/auth0-react";
import { tableClasses } from "@mui/material";
import React from "react";
import AddTable from "./modal.jsx";
import { DataTable } from "./table.jsx";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};


function App() {
  const [tables,setTables] = React.useState([]);
function handleAddNewTable(name,fields){
  setTables([...tables, {id: tables.length, name: name, fields: fields,rows:[]}]);
}
  return (
    <div className="m-4">
      <h1 className="text-red-600 text-2xl">Hello world!</h1>
      {/* <LoginButton /> */}
      <AddTable addNewTable={handleAddNewTable} />
      {tables.map(table => <DataTable table={table} />)}
      {/* <DataTable /> */}
      
    </div>
  );
}

export default App;
