import "C:/Users/anaju/instapets/src/components/Login/styles.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
interface LoginProps {
  loginType: "login" | "signup" | undefined;
}

function Login({ loginType }: LoginProps) {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    console.log(login);
  }, [login, password]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", login);
    console.log("Password:", password);
    setLogin("");
    setPassword("");
  };

  return (
    <>
      <div className="login-container">
        {loginType === "login" ? <h1>Login</h1> : <h1>Criar conta</h1>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={handleChangeLogin}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handleChangePassword}
            required
          />
          <NavLink to="/icon">
            <input
              type="submit"
              value={loginType === "login" ? "Entrar" : "Criar conta  "}
            />
          </NavLink>
        </form>
        {loginType === "login" ? (
          <NavLink to="/signup">
            Ainda não tem uma conta? <br /> 
            Criar nova conta
          </NavLink>
        ) : (
          <NavLink to="/login">Já tenho uma conta</NavLink>
        )}
      </div>
    </>
  );
}

export default Login;
