import Homepage from "./Homepage";
import { connect } from "react-redux";
import { getDataTest } from "./store/actionCreators";

export default connect(state => ({ ...state.Homepage }), {
  getDataTest
})(Homepage);
