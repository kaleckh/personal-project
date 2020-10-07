import React, { Component } from "react";
import "./Home.css";
import {connect} from "react-redux"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: "Warzone",
    };
  }
  createTournament = () => {
    this.props.history.push("/create");
  };
  tournament = () => {
    this.props.history.push("/tournament/:id");
  };
  render() {
    debugger
    return (
      <body>
        <div>
          <div className="header">
            <div className="gameType"> {this.state.gameName} </div>
          </div>
          <div style={{ display: "flex" }}>
            <button className="buttons">them</button>
            <button className="buttons">me</button>
          </div>
          <div>
            <button
              onClick={() => {
                this.createTournament();
              }}
            >
              Create tournament
            </button>
          </div>

          <div>
            <div className="">
              {this.props.tournaments.map((tournament) => {
                return (
                  <div>
                    {tournament.tournamentType}
                    <div>{tournament.teamSize}</div>
                    <div>{tournament.enrolled}</div>
                    <div>{tournament.date}</div>
                  
                  </div>
                );
              })}
              <button
                onClick={() => {
                  this.tournament();
                }}
                className="tournamentType"
              ></button>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

function mapStateToProps(state) {
  return {
    tournaments: state.tournaments,
  };
}

// export default connect(mapStateToProps)(CreateTournament);

export default connect(mapStateToProps)(Home);
