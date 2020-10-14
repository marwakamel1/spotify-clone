import React from "react";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <h1></h1>
      <img
        src="https://yungcitizen.com/wp-content/uploads/2018/09/spotify-logo-horizontal-white.png"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
