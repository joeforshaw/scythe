import Character from 'models/character';
import Mech from 'models/mech';
import Worker from 'models/worker';
import * as Factions from 'enums/factions';
import tokenConfig from 'config/token';
import StateStore from 'utils/state_store';
import MoveUnitActivity from 'activities/move/move_unit';

export default class UnitsInitializer {

  createStore() {
    const units = [];
    for (let faction in Factions.all) {
      const characterState = Object.assign({ faction: faction }, tokenConfig.character);
      const workerState = Object.assign({ faction: faction }, tokenConfig.worker);
      units[faction] = {};
      units[faction].character = new Character(characterState);
      units[faction].workers = [ new Worker(workerState), new Worker(workerState) ];
      units[faction].mechs = [];
    };
    return new StateStore({ units: units });
  }

  initialActivities(stores) {
    const units = stores.units.get().units;
    return [
      new MoveUnitActivity({ unit: units[Factions.NORDIC].character,   to: { row: 0, column: 4 }}),
      new MoveUnitActivity({ unit: units[Factions.NORDIC].workers[0],  to: { row: 1, column: 4 }}),
      new MoveUnitActivity({ unit: units[Factions.NORDIC].workers[1],  to: { row: 1, column: 5 }}),
      new MoveUnitActivity({ unit: units[Factions.RUSVIET].character,  to: { row: 3, column: 7 }}),
      new MoveUnitActivity({ unit: units[Factions.RUSVIET].workers[0], to: { row: 3, column: 6 }}),
      new MoveUnitActivity({ unit: units[Factions.RUSVIET].workers[1], to: { row: 4, column: 6 }}),
      new MoveUnitActivity({ unit: units[Factions.TOGAWA].character,   to: { row: 7, column: 7 }}),
      new MoveUnitActivity({ unit: units[Factions.TOGAWA].workers[0],  to: { row: 6, column: 6 }}),
      new MoveUnitActivity({ unit: units[Factions.TOGAWA].workers[1],  to: { row: 7, column: 6 }}),
      new MoveUnitActivity({ unit: units[Factions.CRIMEA].character,   to: { row: 8, column: 2 }}),
      new MoveUnitActivity({ unit: units[Factions.CRIMEA].workers[0],  to: { row: 7, column: 3 }}),
      new MoveUnitActivity({ unit: units[Factions.CRIMEA].workers[1],  to: { row: 8, column: 3 }}),
      new MoveUnitActivity({ unit: units[Factions.SAXONY].character,   to: { row: 7, column: 0 }}),
      new MoveUnitActivity({ unit: units[Factions.SAXONY].workers[0],  to: { row: 6, column: 0 }}),
      new MoveUnitActivity({ unit: units[Factions.SAXONY].workers[1],  to: { row: 7, column: 1 }}),
      new MoveUnitActivity({ unit: units[Factions.POLANIA].character,  to: { row: 3, column: 0 }}),
      new MoveUnitActivity({ unit: units[Factions.POLANIA].workers[0], to: { row: 3, column: 1 }}),
      new MoveUnitActivity({ unit: units[Factions.POLANIA].workers[1], to: { row: 4, column: 0 }}),
      new MoveUnitActivity({ unit: units[Factions.ALBION].character,   to: { row: 0, column: 1 }}),
      new MoveUnitActivity({ unit: units[Factions.ALBION].workers[0],  to: { row: 1, column: 1 }}),
      new MoveUnitActivity({ unit: units[Factions.ALBION].workers[1],  to: { row: 1, column: 2 }})
    ];
  }

}
