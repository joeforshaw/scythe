import Character from 'models/character';
import Mech from 'models/mech';
import Worker from 'models/worker';
import * as Factions from 'enums/factions';
import PubSub from 'pubsub-js';
import { GAME_INITIALIZED } from 'enums/topics';
import unitConfig from 'config/unit';
import { MOVE_UNIT } from 'enums/topics';

let units;

export default class UnitDirector {

  static init() {
    units = initializeUnits();
    moveUnitsToInitialPositions();
  }

}

function initializeUnits() {
  const newUnits = [];
  for (let faction in Factions.all) {
    const characterState = Object.assign({ faction: faction }, unitConfig.character);
    const workerState = Object.assign({ faction: faction }, unitConfig.worker);
    newUnits[faction] = {};
    newUnits[faction].character = new Character(characterState);
    newUnits[faction].workers = [ new Worker(workerState), new Worker(workerState) ];
    newUnits[faction].mechs = [];
  }
  return newUnits;
}

function moveUnitsToInitialPositions() {
  moveUnit(units[Factions.NORDIC].character,   { row: 0, column: 4 });
  moveUnit(units[Factions.NORDIC].workers[0],  { row: 1, column: 4 });
  moveUnit(units[Factions.NORDIC].workers[1],  { row: 1, column: 5 });
  moveUnit(units[Factions.RUSVIET].character,  { row: 3, column: 7 });
  moveUnit(units[Factions.RUSVIET].workers[0], { row: 3, column: 6 });
  moveUnit(units[Factions.RUSVIET].workers[1], { row: 4, column: 6 });
  moveUnit(units[Factions.TOGAWA].character,   { row: 7, column: 7 });
  moveUnit(units[Factions.TOGAWA].workers[0],  { row: 6, column: 6 });
  moveUnit(units[Factions.TOGAWA].workers[1],  { row: 7, column: 6 });
  moveUnit(units[Factions.CRIMEA].character,   { row: 8, column: 2 });
  moveUnit(units[Factions.CRIMEA].workers[0],  { row: 7, column: 3 });
  moveUnit(units[Factions.CRIMEA].workers[1],  { row: 8, column: 3 });
  moveUnit(units[Factions.SAXONY].character,   { row: 7, column: 0 });
  moveUnit(units[Factions.SAXONY].workers[0],  { row: 6, column: 0 });
  moveUnit(units[Factions.SAXONY].workers[1],  { row: 7, column: 1 });
  moveUnit(units[Factions.POLANIA].character,  { row: 3, column: 0 });
  moveUnit(units[Factions.POLANIA].workers[0], { row: 3, column: 1 });
  moveUnit(units[Factions.POLANIA].workers[1], { row: 4, column: 0 });
  moveUnit(units[Factions.ALBION].character,   { row: 0, column: 1 });
  moveUnit(units[Factions.ALBION].workers[0],  { row: 1, column: 1 });
  moveUnit(units[Factions.ALBION].workers[1],  { row: 1, column: 2 });
}

function moveUnit(unit, to, from) {
  PubSub.publish(MOVE_UNIT, { unit: unit, to: to, from: from });
}
