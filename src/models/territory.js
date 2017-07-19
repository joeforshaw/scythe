import scythe from 'scythe';
import Model from 'models/model';
import TerritoryRenderer from 'renderers/territory';
import config from 'config/territory';
import { SELECTED_UNIT } from 'enums/topics';
import PubSub from 'pubsub-js';
import { moveUnit } from 'store/actions';

export default class Territory extends Model {
  
  constructor(state) {
    state.reachable = false;
    super({ renderer: TerritoryRenderer, state: state });
    const self = this;
    this.units = {};
    PubSub.subscribe(SELECTED_UNIT, function(msg, data) { self.onUnitSelected(data); });
  }

  onClicked() {
    const globalState = scythe.store.getState();
    const state = this.getState();
    if (state.reachable && globalState.selectedUnit) {
      const action = moveUnit(
        globalState.selectedUnit,
        this.coordinates(),
        globalState.selectedUnit.territory.coordinates()
      );
      scythe.store.dispatch(action);
    }
  }

  onUnitSelected(data) {
    this.setState({ reachable: data.unit && this.id in data.reachable });
  }

  coordinates() {
    const state = this.getState();
    return { row: state.row, column: state.column };
  }

  reachableTerritories(numberOfMoves) {
    return this.reachableTerritoriesRecurse({
      movesTaken: 0,
      maxMoves: numberOfMoves,
      current: this,
      visited: {},
      territories: scythe.store.getState().territories
    });
  }

  reachableTerritoriesRecurse(params) {
    return params.current.adjacentTerritories(params.territories);
    // const currentState = params.current.getState();
    // for (let i = 0; i < adjacents.length; i++) {
    //   adjacents[i].setState({ reachable: true });
    // }
  }
  
  adjacentTerritories(allTerritories) {
    let territories;
    const state = this.getState();
    if (state.row % 2 === 0) {
      territories = [
        getAdjacentItem(allTerritories, state.row - 1, state.column + 1), // Top right
        getAdjacentItem(allTerritories, state.row    , state.column + 1), // Right
        getAdjacentItem(allTerritories, state.row + 1, state.column + 1), // Bottom right
        getAdjacentItem(allTerritories, state.row + 1, state.column    ), // Bottom left
        getAdjacentItem(allTerritories, state.row    , state.column - 1), // Left
        getAdjacentItem(allTerritories, state.row - 1, state.column    )  // Top left
      ];
    } else {
      territories = [
        getAdjacentItem(allTerritories, state.row - 1, state.column    ), // Top right
        getAdjacentItem(allTerritories, state.row    , state.column + 1), // Right
        getAdjacentItem(allTerritories, state.row + 1, state.column    ), // Bottom right
        getAdjacentItem(allTerritories, state.row + 1, state.column - 1), // Bottom left
        getAdjacentItem(allTerritories, state.row    , state.column - 1), // Left
        getAdjacentItem(allTerritories, state.row - 1, state.column - 1)  // Top left
      ]
    }
    return convertToObject(territories);
  }

}

function getAdjacentItem(territories, row, column) {
  const exit = row < 0
    || row > config.rows - 1
    || column < 0
    || column > config.columns - 1;
  if (exit) { return undefined; }
  const rowArray = territories[row];
  if (typeof rowArray === 'undefined') { return undefined; }
  return rowArray[column];
}

function convertToObject(territories) {
  const output = {};
  for (let i = 0; i < territories.length; i++) {
    if (!territories[i]) { continue; }
    output[territories[i].id] = territories[i];
  }
  return output;
}
