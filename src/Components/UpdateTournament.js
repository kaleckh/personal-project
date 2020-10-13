import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { updateTournament } from "../ducks/reducer";

class UpdateTournament extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var tournament = this.props.tournaments[this.props.match.params.id];
    return (
      <div>
        <input
          onChange={(event) => {
            this.setState({
              tournamentType: event.target.value,
            });
          }}
          defaultValue={tournament.tournamentType}
          type="text"
        />
        <input
          onChange={(event) => {
            this.setState({
              teamName: event.target.value,
            });
          }}
          defaultValue={tournament.teamName}
          type="text"
        />
        <input
          onChange={(event) => {
            this.setState({
              date: event.target.value,
            });
          }}
          defaultValue={tournament.date}
          type="text"
        />
        <button
          onClick={() => {
              
            axios({
              method: "put",
              url: `http://localhost:3001/tournaments/${this.props.match.params.id}`,
              data: {
                tournamentType: this.state.tournamentType,
                teamName: this.state.teamName,

                date: this.state.date,
              },
            }).then((res) => {
                
              let tournament = res.data;
              this.props.updateTournament({
                id: this.props.match.params.id,
                tournamentType: tournament.tournamentType,
                teamName: tournament.teamName,

                date: tournament.date,
              });
              this.props.history.push("/home");
            });
          }}
        >
          Save
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    tournaments: state.tournaments,
  };
}
const mapDispatchToProps = {
  updateTournament,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTournament);
