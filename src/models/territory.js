import scythe from 'scythe';
import Model from 'models/model';
import TerritoryRenderer from 'renderers/territory';
import config from 'config/territory';
import { SELECTED_UNIT, MOVED_UNIT } from 'enums/topics';
import PubSub from 'pubsub-js';
import { moveUnit } from 'store/actions';

export default class Territory extends Model {
  
  constructor(state) {
    state.reachable = false;
    super({ renderer: TerritoryRenderer, state: state });
    const self = this;
    this.units = {};
    PubSub.subscribe(SELECTED_UNIT, function(msg, data) { self.onUnitSelected(data); });
    PubSub.subscribe(MOVED_UNIT,    function(msg, data) { self.onUnitMoved(data); });
  }

  onClicked() {
    const globalState = scythe.store.getState();
    const state = this.getState();
    const unit = globalState.selectedUnit;
    if (state.reachable && unit) {
      const to = this.coordinates();
      const from = unit.territory.coordinates();
      const action = moveUnit(unit, to, from);
      scythe.store.dispatch(action);
      PubSub.publish(MOVED_UNIT, {
        unit: unit,
        reachable: this.reachableTerritories(unit, unit.numberOfMoves())
      });
    }
  }

  onUnitSelected(data) {
    this.checkIfReachable(data);
  }

  onUnitMoved(data) {
    this.checkIfReachable(data);
  }

  checkIfReachable(data) {
    this.setState({ reachable: data.unit && this.id in data.reachable });
  }

  coordinates() {
    const state = this.getState();
    return { row: state.row, column: state.column };
  }

  reachableTerritories(unit, numberOfMoves) {
    return this.reachableTerritoriesRecurse({
      unit: unit,
      movesTaken: 0,
      maxMoves: numberOfMoves,
      current: this,
      visited: {},
      territories: scythe.store.getState().territories
    });
  }

  reachableTerritoriesRecurse(params) {
    return params.current.adjacentTerritories(params);
    // const currentState = params.current.getState();
    // for (let i = 0; i < adjacents.length; i++) {
    //   adjacents[i].setState({ reachable: true });
    // }
  }
  
  adjacentTerritories(params) {
    let territories;
    const state = this.getState();
    if (state.row % 2 === 0) {
      territories = [
        getAdjacentItem(params, state.row - 1, state.column + 1), // Top right
        getAdjacentItem(params, state.row    , state.column + 1), // Right
        getAdjacentItem(params, state.row + 1, state.column + 1), // Bottom right
        getAdjacentItem(params, state.row + 1, state.column    ), // Bottom left
        getAdjacentItem(params, state.row    , state.column - 1), // Left
        getAdjacentItem(params, state.row - 1, state.column    )  // Top left
      ];
    } else {
      territories = [
        getAdjacentItem(params, state.row - 1, state.column    ), // Top right
        getAdjacentItem(params, state.row    , state.column + 1), // Right
        getAdjacentItem(params, state.row + 1, state.column    ), // Bottom right
        getAdjacentItem(params, state.row + 1, state.column - 1), // Bottom left
        getAdjacentItem(params, state.row    , state.column - 1), // Left
        getAdjacentItem(params, state.row - 1, state.column - 1)  // Top left
      ]
    }
    return convertToObject(territories);
  }

}

function getAdjacentItem(params, row, column) {
  const exit = row < 0
    || row > config.rows - 1
    || column < 0
    || column > config.columns - 1;
  if (exit) { return undefined; }
  const rowArray = params.territories[row];
  if (typeof rowArray === 'undefined') { return undefined; }
  const territory = rowArray[column];
  if (!territory) { return undefined; }
  if (!params.unit.canMoveTo(territory)) { return undefined; }
  return territory;
}

function convertToObject(territories) {
  const output = {};
  for (let i = 0; i < territories.length; i++) {
    if (!territories[i]) { continue; }
    output[territories[i].id] = territories[i];
  }
  return output;
}
