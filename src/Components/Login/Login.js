import React from "react";
import { useState, useContext } from "react";
import { FirebaseContext } from "../../store/Context";
import { useHistory, Link } from "react-router-dom";
import loginValidate from "../../validations/loginValidate";
import Logo from "../../olx-logo.png";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const error = loginValidate(email, password);
    if (error) {
      setError(error);
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button>Login</button>
        </form>
        <Link to="/signup">
          <span style={{ color: "black" }}>Signup</span>
        </Link>
      </div>
    </div>
  );
}

export default Login;
