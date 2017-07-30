import Character from 'models/character';
import Mech from 'models/mech';
import Worker from 'models/worker';
import * as Factions from 'enums/factions';
import unitConfig from 'config/unit';
import StateStore from 'utils/state_store';
import MoveUnitActivity from 'activities/move/move_unit';

export default class UnitsInitializer {

  createStore() {
    const units = [];
    for (let faction in Factions.all) {
      const characterState = Object.assign({ faction: faction }, unitConfig.character);
      const workerState = Object.assign({ faction: faction }, unitConfig.worker);
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
      new MoveUnitActivity(units[Factions.NORDIC].character,   { row: 0, column: 4 }),
      new MoveUnitActivity(units[Factions.NORDIC].workers[0],  { row: 1, column: 4 }),
      new MoveUnitActivity(units[Factions.NORDIC].workers[1],  { row: 1, column: 5 }),
      new MoveUnitActivity(units[Factions.RUSVIET].character,  { row: 3, column: 7 }),
      new MoveUnitActivity(units[Factions.RUSVIET].workers[0], { row: 3, column: 6 }),
      new MoveUnitActivity(units[Factions.RUSVIET].workers[1], { row: 4, column: 6 }),
      new MoveUnitActivity(units[Factions.TOGAWA].character,   { row: 7, column: 7 }),
      new MoveUnitActivity(units[Factions.TOGAWA].workers[0],  { row: 6, column: 6 }),
      new MoveUnitActivity(units[Factions.TOGAWA].workers[1],  { row: 7, column: 6 }),
      new MoveUnitActivity(units[Factions.CRIMEA].character,   { row: 8, column: 2 }),
      new MoveUnitActivity(units[Factions.CRIMEA].workers[0],  { row: 7, column: 3 }),
      new MoveUnitActivity(units[Factions.CRIMEA].workers[1],  { row: 8, column: 3 }),
      new MoveUnitActivity(units[Factions.SAXONY].character,   { row: 7, column: 0 }),
      new MoveUnitActivity(units[Factions.SAXONY].workers[0],  { row: 6, column: 0 }),
      new MoveUnitActivity(units[Factions.SAXONY].workers[1],  { row: 7, column: 1 }),
      new MoveUnitActivity(units[Factions.POLANIA].character,  { row: 3, column: 0 }),
      new MoveUnitActivity(units[Factions.POLANIA].workers[0], { row: 3, column: 1 }),
      new MoveUnitActivity(units[Factions.POLANIA].workers[1], { row: 4, column: 0 }),
      new MoveUnitActivity(units[Factions.ALBION].character,   { row: 0, column: 1 }),
      new MoveUnitActivity(units[Factions.ALBION].workers[0],  { row: 1, column: 1 }),
      new MoveUnitActivity(units[Factions.ALBION].workers[1],  { row: 1, column: 2 })
    ];
  }

}
