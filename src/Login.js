import React from "react";
import "./Login.css";

function Login() {
  const register = () => {};
  const loginToApp = () => {};

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt="LinkedIn Logo"
      />

      <form>
        <input placeholder="Full name" type="text" />
        <input placeholder="Profile Picture URL" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" OnClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member? <br></br>
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
