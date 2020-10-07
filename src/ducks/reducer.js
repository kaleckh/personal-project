const UPDATE_USER = "UPDATE_USER";
const CREATE_POST = "CREATE_POST";
const CREATE_TOURNAMENT = "CREATE_TOURNAMENT"
var initialState = {
  username: "kaleck",
  tournaments: [
    {
      tournamentType: "Search and Destroy",
      teamSize: 3,
      enrolled: 0,
      date: "june 19th",
    },
  ],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TOURNAMENT: 
      let tournaments = state.tournaments;
      tournaments.push(action.payload.tournament)
      return {
        ...state,
        tournaments: tournaments
      }
    case UPDATE_USER:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        profilePic: action.payload.profilePic,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload.post],
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

function createPost(post) {
  return {
    type: CREATE_POST,
    payload: {
      post,
    },
  };
}

function createTournament(tournament) {
  return {
    type: CREATE_TOURNAMENT,
    payload: {
     tournament: tournament
    },
  };
}
export { updateUser, createTournament};
