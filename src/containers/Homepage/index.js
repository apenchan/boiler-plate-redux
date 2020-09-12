import Homepage from "./Homepage";
import { connect } from "react-redux";
import { getCoordinates } from "./store/actionCreators";

export default connect(state => ({ ...state.Homepage }), {
  getCoordinates
})(Homepage);
