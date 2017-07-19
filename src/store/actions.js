import * as ActionTypes from 'store/constants.js';

export const initialize = function(initialState) { return { type: ActionTypes.INITIALIZE, initialState: initialState } }
export const moveUnit = function(unit, to, from) { return { type: ActionTypes.MOVE_UNIT, unit: unit, to: to, from: from }; }
