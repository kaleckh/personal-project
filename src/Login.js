import React, { Component } from "react";
import "./Login.css";
import Popup from "./Popup";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
  }
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
              text={"You have succesfully registered!"}
              closePopup={() => {
                this.setState({
                  showPopup: false,
                });
                this.register();
              }}
            />
          )}
          <div className="loginBox">
            <div className="inputs">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="username..."
              />
              <input
                type="text"
                id="password"
                name="password"
                placeholder="password..."
              />
            </div>

            <button
              className="login"
              onClick={() => {
                this.login();
              }}
            >
              login
            </button>
            <button
              className="register"
              onClick={() => {
                this.setState({
                  showPopup: true,
                });
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
