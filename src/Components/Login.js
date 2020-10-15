import React, { Component } from "react";
import "./Login.css";
import Popup from "./Popup";
import axios from "axios"
import {createUser} from "../ducks/user"
import {connect} from "react-redux"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      username: "",
      password: ""
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

          <div className="content">
            <input
             onChange={(event) => {
              this.setState({
                username: event.target.value
              })
            }}
            className="input"
              type="text"
              id="fname"
              name="firstname"
              placeholder="username..."
            />
            <input
            className="input"
            onChange={(event) => {
              this.setState({
                password: event.target.value
              })
            }}
              type="text"
              id="password"
              name="password"
              placeholder="password..."
            />
            <button
              className="button login"
              onClick={() => {
                this.login();
              }}
            >
              login
            </button>
            <button
              className="button register"
              onClick={() => {
                axios({
                  method: "post",
                  url: "http://localhost:3001/users",
                  data: {
                    username: this.state.username,
                    password: this.state.password
                  }
                }).then((res) => {
                  this.props.createUser(res.data.username, res.data.id)
                  // let tournament = res.data
                  // this.props.createTournament({
                  //   type: tournament.type,
                  //   teamSize: tournament.teamSize,
                  //   enrolled: tournament.enrolled,
                  //   date: tournament.date,
                  // });
                  this.props.history.push("/home");
                });
              }}

              // onClick={() => {
              //   this.setState({
              //     showPopup: true,
                // });
                
              // }}
            >
              register
            </button>
          </div>
        </div>
      </body>
    );
  }
}



const mapDispatchToProps = {
  createUser,
};

export default connect(null, mapDispatchToProps)(Login);

