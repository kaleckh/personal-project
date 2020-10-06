import React, { Component } from "react";
import "./Login.css";
import Popup from "./Popup";

class Login extends Component {
  login = () => {
    this.props.history.push("/home");
  };
  register = () => {
    this.props.history.push("/home");
  };

  render() {
    return (
      <body>
        <div>
          {this.state.showPopup && (
            <Popup
              text={"registered"}
              closePopup={() => {
                console.log("closed");
              }}
            />
          )}
          <div className="loginBox"></div>
          <div className="username">
            <input className="usernameInput" type="text" />
            <input type="text" />
          </div>
          <div className="login">
            <button
              onClick={() => {
                this.login();
              }}
            >
              login
            </button>

            <button
              onClick={() => {
                this.register();
              }}
            >
              register
            </button>
          </div>
        </div>
      </body>
    );
  }
}

export default Login;
