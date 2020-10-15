import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { updateTournament } from "../ducks/tournaments";

class UpdateTournament extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var tournament = this.props.tournaments.find((tournament) => {
       return this.props.match.params.id == tournament.id
    })
    return (
      <div>
        <input
          onChange={(event) => {
            this.setState({
              type: event.target.value,
            });
          }}
          defaultValue={tournament.type}
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
                type: this.state.type,
                teamName: this.state.teamName,

                date: this.state.date,
              },
            }).then((res) => {
                
              let tournament = res.data;
              this.props.updateTournament({
                id: this.props.match.params.id,
                type: tournament.type,
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
    tournaments: state.tournaments.tournaments,
  };
}
const mapDispatchToProps = {
  updateTournament,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTournament);
