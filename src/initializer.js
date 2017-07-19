import scythe from 'scythe';
import { initialize, moveUnit } from 'store/actions';
import territoryConfig from 'config/territory';
import unitConfig from 'config/unit';
import Territory from 'models/territory';
import Character from 'models/character';
import Mech from 'models/mech';
import Worker from 'models/worker';
import * as Factions from 'enums/factions';

export default class Initializer {

  run() {
    const territories = this.initializeTerritories();
    const units = this.initializeUnits();
    scythe.store.dispatch(initialize({
      game:        scythe.game,
      territories: territories,
      units:       units
    }));
    
    scythe.store.dispatch(moveUnit(units[Factions.NORDIC].character,  { row: 0, column: 4 }));
    scythe.store.dispatch(moveUnit(units[Factions.NORDIC].workers[0], { row: 1, column: 4 }));
    scythe.store.dispatch(moveUnit(units[Factions.NORDIC].workers[1], { row: 1, column: 5 }));

    scythe.store.dispatch(moveUnit(units[Factions.RUSVIET].character,  { row: 3, column: 7 }));
    scythe.store.dispatch(moveUnit(units[Factions.RUSVIET].workers[0], { row: 3, column: 6 }));
    scythe.store.dispatch(moveUnit(units[Factions.RUSVIET].workers[1], { row: 4, column: 6 }));

    scythe.store.dispatch(moveUnit(units[Factions.TOGAWA].character,  { row: 7, column: 7 }));
    scythe.store.dispatch(moveUnit(units[Factions.TOGAWA].workers[0], { row: 6, column: 6 }));
    scythe.store.dispatch(moveUnit(units[Factions.TOGAWA].workers[1], { row: 7, column: 6 }));

    scythe.store.dispatch(moveUnit(units[Factions.CRIMEA].character,  { row: 8, column: 2 }));
    scythe.store.dispatch(moveUnit(units[Factions.CRIMEA].workers[0], { row: 7, column: 3 }));
    scythe.store.dispatch(moveUnit(units[Factions.CRIMEA].workers[1], { row: 8, column: 3 }));

    scythe.store.dispatch(moveUnit(units[Factions.SAXONY].character,  { row: 7, column: 0 }));
    scythe.store.dispatch(moveUnit(units[Factions.SAXONY].workers[0], { row: 6, column: 0 }));
    scythe.store.dispatch(moveUnit(units[Factions.SAXONY].workers[1], { row: 7, column: 1 }));

    scythe.store.dispatch(moveUnit(units[Factions.POLANIA].character,  { row: 3, column: 0 }));
    scythe.store.dispatch(moveUnit(units[Factions.POLANIA].workers[0], { row: 3, column: 1 }));
    scythe.store.dispatch(moveUnit(units[Factions.POLANIA].workers[1], { row: 4, column: 0 }));

    scythe.store.dispatch(moveUnit(units[Factions.ALBION].character,  { row: 0, column: 1 }));
    scythe.store.dispatch(moveUnit(units[Factions.ALBION].workers[0], { row: 1, column: 1 }));
    scythe.store.dispatch(moveUnit(units[Factions.ALBION].workers[1], { row: 1, column: 2 }));
  }

  initializeUnits() {
    const units = [];
    for (let faction in Factions.all) {
      const characterState = Object.assign({ faction: faction }, unitConfig.character);
      const workerState = Object.assign({ faction: faction }, unitConfig.worker);
      units[faction] = {};
      units[faction].character = new Character(characterState);
      units[faction].workers = [ new Worker(workerState), new Worker(workerState) ];
      units[faction].mechs = [];
    }
    return units;
  }

  initializeTerritories() {
    const territories = [ [], [], [], [], [], [], [], [], [] ];
    for (let i = 0; i < territoryConfig.data.length; i++) {
      const row = territoryConfig.data[i];
      for (let j = 0; j < row.length; j++) {
        let item = row[j];
        const frame = this.territoryFrame(
          item.column,
          item.row,
          territoryConfig.territory.width,
          territoryConfig.territory.height
        );
        territories[item.row][item.column] = new Territory(Object.assign(item, frame));
      }
    }
    return territories;
  }

  territoryFrame(column, row, width, height) {
    return {
      x: (row % 2 === 0 ? width / 2 : 0) + (column * width),
      y: (height - (height / (2 * Math.tan(Math.PI/3)))) * row,
      width: width,
      height: height
    };
  }

}
