import Character from 'models/character';
import Mech from 'models/mech';
import Worker from 'models/worker';
import * as Factions from 'enums/factions';
import PubSub from 'pubsub-js';
import { GAME_INITIALIZED } from 'enums/topics';
import territoryConfig from 'config/territory';
import Territory from 'models/territory';
import * as Topics from 'enums/topics';

export default class TerritoryDirector {

  static init() {
    TerritoryDirector.territories = initializeTerritories();
    PubSub.subscribe(Topics.MOVE_UNIT);
    return TerritoryDirector.territories;
  }

  static moveUnit(unit, to, from) {
    if (from) {
      delete TerritoryDirector.territories[from.row][from.column].units[unit.id];
    }
    unit.territory = TerritoryDirector.territories[to.row][to.column];
    TerritoryDirector.territories[to.row][to.column].units[unit.id] = unit;
    
    const territoryCenter = unit.territory.center();
    const unitState = unit.getState();
    unit.setState(unit.territory.positionForCommonCentre(unit));
    return state;
  }

}

function initializeTerritories() {
  const territories = [ [], [], [], [], [], [], [], [], [] ];
  for (let i = 0; i < territoryConfig.data.length; i++) {
    const row = territoryConfig.data[i];
    for (let j = 0; j < row.length; j++) {
      let item = row[j];
      const frame = territoryFrame(
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

function territoryFrame(column, row, width, height) {
  const offsets = { x: 0.87, y: 1.065 };
  return {
    x: ((row % 2 === 0 ? width / 2 : 0) + (column * width)) * offsets.x,
    y: ((height - (height / (2 * Math.tan(Math.PI/3)))) * row) * offsets.y,
    width: width,
    height: height
  };
}
