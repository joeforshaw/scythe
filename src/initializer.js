import scythe from 'scythe';
import { initialize, moveUnit } from 'store/actions';
import territoryConfig from 'config/territory';
import unitConfig from 'config/unit';
import Territory from 'models/territory';
import * as Factions from 'enums/factions';

export default class Initializer {

  run() {
    const territories = this.initializeTerritories();
    scythe.store.dispatch(initialize({
      game:        scythe.game,
      territories: territories
    }));
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
    const offsets = { x: 0.87, y: 1.065 };
    return {
      x: ((row % 2 === 0 ? width / 2 : 0) + (column * width)) * offsets.x,
      y: ((height - (height / (2 * Math.tan(Math.PI/3)))) * row) * offsets.y,
      width: width,
      height: height
    };
  }

}
