import {bindActionCreators} from 'redux';
import currentUser from './actionCreators/currentUser';

function mapDispatchToProps(component) {
  switch (component) {
    case "CurrentUser":
      return function (dispatch) {
        return {
          changeCurrentUser: bindActionCreators(currentUser, dispatch)
        };
      };
    default:
      return null;
  }
}

export default mapDispatchToProps;
