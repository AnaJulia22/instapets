import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import IconPage from "./pages/ic";

function HomePage() {
  return (
    <>
      <div className="Home">
        <h1>Welcome to Instapets</h1> 
        
        <NavLink to="/login">
          <button className="Entrar">Fazer Login</button>
        </NavLink>     
        
        <NavLink to="/signup">
          <button className="NovaConta">Criar nova conta</button>
        </NavLink>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/icon" element={<IconPage />} />
      </Routes>
    </>
  );
}

export default App;
