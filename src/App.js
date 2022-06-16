
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/home";
import LoginPage from "./components/LoginPage";
function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>loading...</div>
  return (
    <div>
      <LoginPage />
      <Home />
    </div>
  );
}

export default App;

