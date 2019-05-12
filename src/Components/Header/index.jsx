import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);
