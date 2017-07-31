import scythe from 'scythe';
import Model from 'models/model';
import TerritoryRenderer from 'renderers/territory';
import config from 'config/territory';
import PubSub from 'pubsub-js';
import * as TerritorySides from 'enums/territory_sides';
import {
  ACTIVITY,
  DESELECT_TERRITORY_ALL
} from 'enums/topics';

export default class Territory extends Model {

  constructor(state) {
    state.selectable = false;
    state.units = {};
    super({ renderer: TerritoryRenderer, state: state });
    const self = this;
    PubSub.subscribe(DESELECT_TERRITORY_ALL, function(msg, data) {
      self.deselect();
    })
  }

  onClicked() {
    let state = this.state.get();
    if (state.onClickActivity) {
      PubSub.publish(ACTIVITY, state.onClickActivity);
    }
  }

  coordinates() {
    const state = this.state.get();
    return { row: state.row, column: state.column };
  }

  adjacentPositions() {
    const state = this.state.get();
    let positions = [];
    if (state.row % 2 === 0) {
      positions = [
        getAdjacentItem(TerritorySides.TOP_RIGHT,    state.row - 1, state.column + 1),
        getAdjacentItem(TerritorySides.RIGHT,        state.row,     state.column + 1),
        getAdjacentItem(TerritorySides.BOTTOM_RIGHT, state.row + 1, state.column + 1),
        getAdjacentItem(TerritorySides.BOTTOM_LEFT,  state.row + 1, state.column    ),
        getAdjacentItem(TerritorySides.LEFT,         state.row,     state.column - 1),
        getAdjacentItem(TerritorySides.TOP_LEFT,     state.row - 1, state.column    )
      ];
    } else {
      positions = [
        getAdjacentItem(TerritorySides.TOP_RIGHT,    state.row - 1, state.column    ),
        getAdjacentItem(TerritorySides.RIGHT,        state.row,     state.column + 1),
        getAdjacentItem(TerritorySides.BOTTOM_RIGHT, state.row + 1, state.column    ),
        getAdjacentItem(TerritorySides.BOTTOM_LEFT,  state.row + 1, state.column - 1),
        getAdjacentItem(TerritorySides.LEFT,         state.row,     state.column - 1),
        getAdjacentItem(TerritorySides.TOP_LEFT,     state.row - 1, state.column - 1)
      ]
    }
    return positions.filter(function(p) { return p; })
  }

  deselect() {
    this.state.set({ selectable: false, selected: false });
  }

  positionForUnit(unit) {
    const state = this.state.get();
    const position = config.tokenPositions[unit.state.get().type][0];
    return {
      x: state.x + Math.round(position.x * state.width),
      y: state.y + Math.round(position.y * state.height)
    };
  }

}

function getAdjacentItem(side, row, column) {
  const exit = row < 0
    || row > config.rows - 1
    || column < 0
    || column > config.columns - 1;
  if (exit) { return undefined; }
  return { row: row, column: column, side: side };
}
