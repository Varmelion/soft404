import { connect } from "react-redux";
import PostsList from "./PostsList";
import { getAllPostsFromApi } from "../actions/postActions";
import { getFriendsMiddleware } from "../actions/friendsAction";

const mapStateToProps = state => {
  return {
    posts: state.me.Posts.filter(
      post =>
        post.Title.toLowerCase().includes(state.filterText.toLowerCase()) ||
        post.Text.toLowerCase().includes(state.filterText.toLowerCase())
    ),

    friends: state.friends,

    userPhoto: state.me.Friend.Photo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getAllPostsFromApi()),
    getFriends: () => dispatch(getFriendsMiddleware())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);
