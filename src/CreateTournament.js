import React, { Component } from "react";
import { connect } from "react-redux";
import {createTournament} from "./ducks/reducer" 

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
                
                this.props.createTournament({
                  tournamentType: this.state.tournamentType,
                  teamSize: this.state.teamSize,
                  enrolled: 0,
                  date: this.state.date
                })
                this.props.history.push("/home");
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
  createTournament
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateTournament);
