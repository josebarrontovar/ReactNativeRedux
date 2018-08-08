import { connect } from "react-redux";
import App from "../Routes";

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
