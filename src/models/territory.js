import scythe from 'scythe';
import Model from 'models/model';
import TerritoryRenderer from 'renderers/territory';
import config from 'config/territory';
import PubSub from 'pubsub-js';
import * as Territories from 'enums/territories';
import * as Resources from 'enums/resources';
import * as TerritorySides from 'enums/territory_sides';
import { modelArrayToObject } from 'utils/helper';
import {
  ACTIVITY,
  ACTION_END
} from 'enums/topics';

export default class Territory extends Model {

  constructor(state) {
    state.selectable = false;
    state.units = {};
    state.resources = {};
    super({ renderer: TerritoryRenderer, state: state });
    const self = this;
    PubSub.subscribe(ACTION_END, function(msg, data) {
      self.deselect();
    })
  }

  onClicked() {
    let state = this.state.get();
    if (state.onClickActivity) {
      PubSub.publish(ACTIVITY, state.onClickActivity);
    }
  }

  territoryType() {
    return this.state.get().type;
  }

  resourceType() {
    switch (this.state.get().type) {
      case Territories.MOUNTAIN: return Resources.METAL;
      case Territories.TUNDRA:   return Resources.OIL;
      case Territories.FOREST:   return Resources.WOOD;
      case Territories.FARM:     return Resources.FOOD;
      default:                   return null;
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

  nextUnitPosition(unit) {
    const unitType = unit.state.get().type;
    const units = this.state.get().units;
    let count = 0;
    for (let id in units) {
      count += units[id].state.get().type == unitType ? 1 : 0;
    }
    const unitPositions = config.unitPositions;
    const percentages = config.unitPositions[unitType][count];
    return this.tokenPosition(percentages);
  }

  nextResourcePosition() {
    const resourceCount = Object.keys(this.state.get().resources).length;
    const percentages = config.resourcePositions[resourceCount];
    return this.tokenPosition(percentages);
  }

  tokenPosition(percentages) {
    const state = this.state.get();
    return {
      x: state.x + Math.round(percentages.x * state.width),
      y: state.y + Math.round(percentages.y * state.height)
    };
  }

  addResources(newResources) {
    const state = this.state.get();
    let currentResources = state.resources;
    let mergedResources = Object.assign(currentResources, modelArrayToObject(newResources));
    this.state.set(mergedResources);
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
