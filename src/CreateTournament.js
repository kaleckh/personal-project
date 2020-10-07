import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameType: "gungame",
      teamSize: 5,
      date: "june 19th",
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
              onClick={(event) => {
                this.setState({
                  gameType: this.state.gameType,
                });
              }}
            />
            <label>Team size</label>{" "}
            <input
              onClick={(event) => {
                this.setState({
                  teamSize: this.state.teamSize,
                });
              }}
            />
            <label>Date</label>
            <input
              onClick={(event) => {
                this.setState({
                  date: this.state.date,
                });
              }}
            />
            <button
              onClick={() => {
                console.log(this.state);
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
  console.log("TESTSET", state);
  return {
    username: state.username,
  };
}

// export default connect(mapStateToProps)(CreateTournament);

export default connect(mapStateToProps)(CreateTournament);
