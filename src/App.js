import { useAuth0 } from "@auth0/auth0-react";
import AddTable from "./modal.jsx";
import { DataTable } from "./table.jsx";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};


function App() {
  return (
    <div>
      <h1 className="text-green-600 text-2xl">Hello world!</h1>
      {/* <LoginButton /> */}
      <AddTable />
      <DataTable />
    </div>
  );
}

export default App;
