import scythe from 'scythe';
import * as ActionTypes from 'store/constants';

const reducer = (state = {}, action) => {
  let output = state;
  switch (action.type) {
    case ActionTypes.INITIALIZE:        output = action.initialState; break;
    case ActionTypes.MOVE_UNIT:         output = moveUnit(state, action); break;
    case ActionTypes.SET_SELECTED_UNIT: output = Object.assign(state, { selectedUnit: action.unit }); break;
  }
  return output;
}

function moveUnit(state, action) {
  if (action.from) {
    delete state.territories[action.from.row][action.from.column].units[action.unit.id];
  }
  action.unit.territory = state.territories[action.to.row][action.to.column];
  state.territories[action.to.row][action.to.column].units[action.unit.id] = action.unit;
  
  const territoryCenter = action.unit.territory.center();
  const unitState = action.unit.getState();
  action.unit.setState(action.unit.territory.positionForCommonCentre(action.unit));
  return state;
}

export default reducer;
