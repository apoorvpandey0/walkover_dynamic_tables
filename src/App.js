import { useAuth0 } from "@auth0/auth0-react";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  const {isLoading}=useAuth0();
  if(isLoading)return <div>loading...</div>
  return (
    <div>
      <Login />
      <Home/>
    </div>
  );
}

export default App;
