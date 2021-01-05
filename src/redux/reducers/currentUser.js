import CURRENT_USER from '../actions/currentUser';
import initialState from '../initialState';

function currentUser(state = initialState, action) {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state.currentUser,
          id: action.payload.id,
          name: action.payload.name,
      };
    default:
      return state;
  }
}

export default currentUser;
