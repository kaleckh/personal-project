import React, { Component } from "react";
import {connect} from "react-redux"

class Bracket extends Component {
    render() {
        var tournament = this.props.tournaments[this.props.match.params.id]
        return(
            <div>{tournament.tournamentType}</div>
        )
    }
}


function mapStateToProps(state) {
    return {
      tournaments: state.tournaments,
    };
  }
  
  
  
  export default connect(mapStateToProps)(Bracket);

// export default Bracket;