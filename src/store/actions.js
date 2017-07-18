import * as ActionTypes from 'store/constants.js';

export const createPhaser    = function(instance) { return { type: ActionTypes.CREATE_PHASER,    instance: instance }; }
export const createBoard     = function(instance) { return { type: ActionTypes.CREATE_BOARD,     instance: instance }; }
export const createTerritory = function(instance) { return { type: ActionTypes.CREATE_TERRITORY, instance: instance }; }
export const updateTick      = function(tick)     { return { type: ActionTypes.UPDATE_TICK,      tick:     tick }; }
