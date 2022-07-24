import React from "react";
import "./Login.css";
import LoginBackground from "../images/loginBackground.png";
function Login() {
    return (
        <div id="login">
            <div id="loginLeft">
                <h1>Login</h1>
                <form>
                    <div>
                        <label for="email">Email Address</label>
                        <input id="email" type="text" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input maxLength="30" type="password" />
                        <a href="https://www.youtube.com/watch?v=75aTZq-qoZk">Reset Password</a>
                    </div>
                    <input id="loginButton" type="submit" value="Login" />
                </form>

            </div>
            <img src={LoginBackground} id="loginRight" />

        </div>
    )
}
export default Login;