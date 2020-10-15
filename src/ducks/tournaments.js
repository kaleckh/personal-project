const CREATE_POST = "CREATE_POST";
const CREATE_TOURNAMENT = "CREATE_TOURNAMENT";
const UPDATE_TOURNAMENTS = "UPDATE_TOURNAMENTS";
const DELETE_TOURNAMENT = "DELETE_TOURNAMENT";

const UPDATE_TOURNAMENT = "UPDATE_TOURNAMENT";
var initialState = {
  tournaments: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TOURNAMENT:
      let tournaments = state.tournaments;
      tournaments.push(action.payload.tournament);
      return {
        ...state,
        tournaments: tournaments,
      };

    case UPDATE_TOURNAMENTS:
      return {
        ...state,
        tournaments: action.payload.tournaments,
      };
    case UPDATE_TOURNAMENT:
      let tournament = action.payload.tournament;
      let ts = state.tournaments;
      return {
        ...state,
        tournaments: ts.map((t) => {
          if (tournament.id == t.id) {
            return tournament;
          } else {
            return t;
          }
        }),
      };
    case DELETE_TOURNAMENT:
      let tournamentss = [...state.tournaments];
      var res = tournamentss.filter((tournament) => {
        return tournament.id !== action.payload.tournament.id;
      });

      return {
        ...state,
        tournaments: res,
      };
    default:
      return state;
  }
}

function createTournament(tournament) {
  return {
    type: CREATE_TOURNAMENT,
    payload: {
      tournament: tournament,
    },
  };
}
function updateTournaments(tournaments) {
  return {
    type: UPDATE_TOURNAMENTS,
    payload: {
      tournaments: tournaments,
    },
  };
}
function updateTournament(tournament) {
  return {
    type: UPDATE_TOURNAMENT,
    payload: {
      tournament: tournament,
    },
  };
}
function deleteTournament(tournamentId) {
  return {
    type: DELETE_TOURNAMENT,
    payload: {
      tournamentId: tournamentId,
    },
  };
}

export {
  createTournament,
  updateTournaments,
  deleteTournament,
  updateTournament,
};
