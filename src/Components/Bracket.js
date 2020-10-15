import React, { Component } from "react";
import { connect } from "react-redux";
import Tournament from "./Tournament";

class Bracket extends Component {
  render() {
    
    var tournament = this.props.tournaments.find((tournament) => {
      return this.props.match.params.id == tournament.id;
    });
    
    return (
      <div>
        <Tournament players={tournament.teamName} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tournaments: state.tournaments.tournaments,
  };
}

export default connect(mapStateToProps)(Bracket);

// export default Bracket;
