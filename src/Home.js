import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: "",
    };
  }
  createTournament = () => {
    this.props.history.push("/create");
  };
  tournament = () => {
    this.props.history.push("/tournament/:id");
  };
  componentDidMount() {
    axios({
      url: "http://localhost:3001/tournaments",
      method: "get",
    }).then((res) => {
      debugger;
    });
  }
  render() {
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
              className="createButton"
            >
              Create tournament
            </button>
          </div>

          <div className="">
            {this.props.tournaments.map((tournament, index) => {
              return (
                <div
                  className="link"
                  onClick={() => {
                    this.props.history.push(`/tournament/${index}`);
                  }}
                >
                  <div className="type">
                    {tournament.teamSize} {tournament.tournamentType}
                  </div>
                  <div>Teams enrolled</div>
                  <div>{tournament.enrolled}</div>
                  <div>Date</div>
                  <div>{tournament.date}</div>
                </div>
              );
            })}
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
