import React, { Component } from "react";
import "./Home.css";
import { connect } from "react-redux";
import axios from "axios";
import { updateTournaments, deleteTournament } from "../ducks/tournaments";
import Button from "./Button";
class Home extends Component {
  constructor(props) {
    console.log(process.env)
    super(props);
    this.state = {
      gameName: "",
    };
  }
  createTournament = () => {
    this.props.history.push("/create");
  };
  updateTournament = (tournamentId) => {
    this.props.history.push(`/update/${tournamentId}`);
  };

  componentDidMount() {
    axios({
      url: `${process.env.REACT_APP_SERVER_URL}/tournaments`,
      method: "get",
    }).then((res) => {
      this.props.updateTournaments(res.data);
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
            <Button>them</Button>
            <Button>me</Button>
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

          <div className="gridContainer">
            {this.props.tournaments.map((tournament) => {
              return (
                <div className="gridItem">
                  <div
                    className="link"
                    onClick={() => {
                      this.props.history.push(`/tournament/${tournament.id}`);
                    }}
                  >
                    <div className="type">
                      {tournament.teamSize} {tournament.type}
                    </div>
                    <div>Teams enrolled</div>
                    <div>{tournament.enrolled}</div>
                    <div>Date</div>
                    <div>{tournament.date}</div>
                  </div>
                  <button
                    onClick={() => {
                      axios({
                        method: "delete",
                        url: `${process.env.REACT_APP_SERVER_URL}/tournaments/${tournament.id}`,
                      }).then((res) => {
                        this.props.deleteTournament(tournament.id);
                      });
                    }}
                  >
                    delete
                  </button>
                  <button
                    onClick={() => {
                      this.updateTournament(tournament.id);
                    }}
                  >
                    update
                  </button>
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
    tournaments: state.tournaments.tournaments,
  };
}
const mapDispatchToProps = {
  updateTournaments,
  deleteTournament,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
