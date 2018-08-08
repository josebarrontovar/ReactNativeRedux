import { connect } from "react-redux";
import { logout } from "../redux/actions";
import { PantallaPrincipal } from "../components";

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  dispatch,
  logout: () => dispatch(logout())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PantallaPrincipal);
