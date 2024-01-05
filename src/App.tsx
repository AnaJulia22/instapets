import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import IconPage from "./pages/ic";

function HomePage() {
  return <h1>Welcome to Instapets</h1>;
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
