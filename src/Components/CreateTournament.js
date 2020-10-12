import React, { Component } from "react";
import { connect } from "react-redux";
import { createTournament } from "../ducks/reducer";

import axios from "axios";

class CreateTournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournamentType: null,
      teamSize: null,
      date: null,
    };
  }
  render() {
    return (
      <body>
        {this.props.username}
        <div className="newBox">
          <div>
            <label>Game type</label>{" "}
            <input
              onChange={(event) => {
                this.setState({
                  tournamentType: event.target.value,
                });
              }}
            />
            <label>Team size</label>{" "}
            <input
              onChange={(event) => {
                this.setState({
                  teamSize: event.target.value,
                });
              }}
            />
            <label>Date</label>
            <input
              onChange={(event) => {
                this.setState({
                  date: event.target.value,
                });
              }}
            />
            <button
              onClick={() => {
                axios({
                  method: "post",
                  url: "http://localhost:3001/tournaments",
                  data: {
                    tournamentType: this.state.tournamentType,
                    teamSize: this.state.teamSize,
                    enrolled: 0,
                    date: this.state.date,
                  }
                }).then((res) => {
                  
                  let tournament = res.data
                  this.props.createTournament({
                    tournamentType: tournament.tournamentType,
                    teamSize: tournament.teamSize,
                    enrolled: tournament.enrolled,
                    date: tournament.date,
                  });
                  this.props.history.push("/home");
                });
              }}
            >
              Save
            </button>
          </div>
        </div>
      </body>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
  };
}

const mapDispatchToProps = {
  createTournament,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTournament);
