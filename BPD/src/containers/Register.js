import { connect } from "react-redux";
import { registeruser } from "../redux/actions";
import { Register } from "../components";

const mapDispatchToProps = dispatch => ({
  dispatch,
  registeruser: (username, password) =>
    dispatch(registeruser(username, password))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
