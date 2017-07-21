import scythe from 'scythe';
import Model from 'models/model';
import TerritoryRenderer from 'renderers/territory';
import config from 'config/territory';
import { SELECTED_UNIT, MOVED_UNIT } from 'enums/topics';
import PubSub from 'pubsub-js';
import { moveUnit } from 'store/actions';
import * as TerritorySides from 'enums/territory_sides';

export default class Territory extends Model {
  
  constructor(state) {
    state.movable = false;
    state.units = {};
    super({ renderer: TerritoryRenderer, state: state });
    const self = this;
    // PubSub.subscribe(SELECTED_UNIT, function(msg, data) { self.onUnitSelected(data); });
    // PubSub.subscribe(MOVED_UNIT,    function(msg, data) { self.onUnitMoved(data); });
  }

  onClicked() {
    const globalState = scythe.store.getState();
    const state = this.getState();
    const unit = globalState.selectedUnit;
    if (state.movable && unit) {
      const to = this.coordinates();
      const from = unit.getState().territory.coordinates();
      const action = moveUnit(unit, to, from);
      scythe.store.dispatch(action);
    }
  }
  
  coordinates() {
    const state = this.getState();
    return { row: state.row, column: state.column };
  }

  adjacentPositions() {
    const state = this.getState();
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

}

function getAdjacentItem(side, row, column) {
  const exit = row < 0
    || row > config.rows - 1
    || column < 0
    || column > config.columns - 1;
  if (exit) { return undefined; }
  return { row: row, column: column, side: side };
}
