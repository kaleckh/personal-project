import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameName: "Warzone"

    } 
  }
   tournament = () => {
    this.props.history.push("/tournament/:id");
  }
  render() {
    return (
      <body>
        <div>
          <div className="header">
            <div className="gameType"> {this.state.gameName} </div>
          </div>
          <div style={{ display: "flex" }}>
            <button  className="buttons">them</button>
            <button className="buttons">me</button>
          </div>

          <div>
            <div className="link"></div>
            <button onClick={() => {
              this.tournament()
            }} className="tournament">tournament</button>
          </div>
          <div className="link2"></div>
          <div className="link3"></div>
        </div>
      </body>
    );
  }
}

export default Home;
