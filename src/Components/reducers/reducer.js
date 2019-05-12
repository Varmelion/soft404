import { GET_POSTS, ADD_POST, DELETE_POST } from "../actions/postActions";
import { DELETE_USER, UPDATE_USER } from "../actions/userActions";

const initialState = {
  posts: [],
  user: {
    Name: "James",
    GivenName: "Bond"
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.payload.post, ...state.posts]
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(
          onePost => onePost.postToDel.Id !== action.payload.postToDel.Id
        )
      };

    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };

    case DELETE_USER:
      return {
        state: null
      };

    default:
      return state;
  }
};
export default reducer;
