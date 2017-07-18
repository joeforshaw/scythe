import scythe from 'scythe';
import * as ActionTypes from 'store/constants';

const reducer = (state = {}, action) => {
  let output = state;
  console.log(action.type, action);
  switch (action.type) {
    case ActionTypes.INITIALIZE: output = action.initialState; break;
    case ActionTypes.MOVE_UNIT:  output = moveUnit(state, action); break;
  }
  return output;
}

function moveUnit(state, action) {
  if (action.old) {
    const oldTerritory = state.territories[action.old.row][action.old.column];
  }
  const newTerritory = state.territories[action.new.row][action.new.column];
  newTerritory.units.push(action.unit);
}

export default reducer;
