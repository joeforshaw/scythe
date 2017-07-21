import scythe from 'scythe';
import * as ActionTypes from 'store/constants';

const reducer = (state = {}, action) => {
  let output = state;
  switch (action.type) {
    case ActionTypes.INITIALIZE:        output = action.initialState; break;
    case ActionTypes.SET_SELECTED_UNIT: output = Object.assign(state, { selectedUnit: action.unit }); break;
  }
  return output;
}

export default reducer;
