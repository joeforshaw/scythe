import scythe from 'scythe';
import { initialize, moveUnit } from 'store/actions';
import territoryConfig from 'config/territory';
import unitConfig from 'config/unit';
import Territory from 'models/territory';
import Character from 'models/character';
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
    for (let unit in units) {
      // scythe.store.dispatch(moveUnit(unit, territories[][]))
    }
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
