const UPDATE_USER = "UPDATE_USER";
const CREATE_POST = "CREATE_POST";
const CREATE_TOURNAMENT = "CREATE_TOURNAMENT";
const UPDATE_TOURNAMENTS = "UPDATE_TOURNAMENTS";
const DELETE_TOURNAMENT = "DELETE_TOURNAMENT";
const CREATE_USER = "CREATE_USER"
var initialState = {
  username: "kaleck",
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

    case CREATE_USER:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
      };
    case UPDATE_TOURNAMENTS:
      return {
        ...state,
        tournaments: action.payload.tournaments,
      };
    case DELETE_TOURNAMENT:
      let tournamentss = [...state.tournaments];
      tournamentss.splice(action.payload.tournamentIndex, 1);

      return {
        ...state,
        tournaments: tournamentss,
      };
    default:
      return state;
  }
}

function updateUser(id, username, profilePic) {
  return {
    type: UPDATE_USER,
    payload: {
      id: id,
      username: username,
      profilePic: profilePic,
    },
  };
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
function deleteTournament(tournamentIndex) {
  return {
    type: DELETE_TOURNAMENT,
    payload: {
      tournamentIndex: tournamentIndex,
    },
  };
}
function createUser(username, id) {
  return {
    type: CREATE_USER,
    payload: { username, id },
  };
}
export { updateUser, createTournament, updateTournaments, deleteTournament, createUser };
