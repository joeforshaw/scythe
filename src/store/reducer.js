import * as ActionTypes from 'store/constants';
import * as Actions from 'store/actions';

const initialState = {
  territories: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_PHASER:    state = Object.assign(state, { phaser: action.instance }); break;
    case ActionTypes.CREATE_BOARD:     state = Object.assign(state, { board: action.instance }); break;
    case ActionTypes.CREATE_TERRITORY: state = createTerritory(state, action); break;
    case ActionTypes.UPDATE_TICK:      state = Object.assign(state, { tick: action.tick }); break;
  }
  return state;
}

function createTerritory(state, action) {
  state.territories.push(action.instance)
  return state;
}

export default reducer;
