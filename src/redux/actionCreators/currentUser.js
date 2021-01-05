import CURRENT_USER from '../actions/currentUser';

function currentUser(value) {
  return {
    type: CURRENT_USER,
    payload: value,
  }
}

export default currentUser;
