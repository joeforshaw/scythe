import * as ActionTypes from 'store/constants';
import * as Actions from 'store/actions';

const reducer = (state = [], action) => {
  switch (action.type) {
    case Actions.CREATE_BOARD: return merge(state, { board: action.instance }); break;
    case Actions.UPDATE_TICK:  return merge(state, { tick:  action.tick });     break;
    default: return state
  }
}

function merge(state, newState) {
  return Object.assign(state, newState);
}

export default reducer;
