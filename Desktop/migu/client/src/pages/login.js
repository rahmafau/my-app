import React, { useState } from "react";
import "./login.css";
import Axios from "axios";

import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'

function Login() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let [errorMessage, setErrorMessage] = useState("");

  let navigate = useNavigate();

  const login = () => {
    Axios.post("http://localhost:3001/user/login", {
      username: username,
      password: password,
    }).then((res) => {
      if (res.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", res.data.username);
        navigate("/");
      } else {
        setErrorMessage(res.data.message);
      }
    });
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <div className="LoginForm">
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        <h1 style={{ color: "red" }}>{errorMessage} </h1>
      </div>
    </div>
  );
}

export default Login;