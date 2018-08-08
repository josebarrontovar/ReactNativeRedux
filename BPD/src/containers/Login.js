import { connect } from "react-redux";
import { fetchSession, login } from "../redux/actions";
import { Login } from "../components";

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchSession: () => dispatch(fetchSession()),
  login: (username, password) => dispatch(login(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
